import SQLiteAsyncESMFactory from 'wa-sqlite/dist/wa-sqlite-async.mjs';
import * as SQLite from 'wa-sqlite';
import { IDBBatchAtomicVFS } from 'wa-sqlite/src/examples/IDBBatchAtomicVFS'; //' ./wa-sqlite/src/examples/IndexedDbVFS.js'


window.sqlite = {
    sqlite3: null,
    dotNetRef: null,
    test: function () {
        console.log("Junk");
        hello();
    },

    /*
    Open the database

    */
    open: async function (dbName, fileName) {
        const asyncModule = await SQLiteAsyncESMFactory();
        const sqlite3 = SQLite.Factory(asyncModule);
        sqlite3.vfs_register(
            new IDBBatchAtomicVFS(fileName));//, { durability: "relaxed" })
        //);
        const connection = await sqlite3.open_v2(
            dbName,
            SQLite.SQLITE_OPEN_CREATE |
            SQLite.SQLITE_OPEN_READWRITE |
            SQLite.SQLITE_OPEN_URI,
            fileName
        );
        sqlite.sqlite3 = sqlite3;//store it
        return connection;
       // return await open2();
    },

    close: async function (dbConnectionNumber) {
        return await sqlite.sqlite3.close(dbConnectionNumber);
    },

    /*Execute a sql command
    */
    execute: async function (dbConn, query) {
        
        let rowResult = {response: null, result:"", error:""};
        try {
            let response = await sqlite.sqlite3.exec(dbConn, query, (row, columns) => {
                rowResult.result = row[0];
                console.log(columns);
            });
            rowResult.response = response;
            return rowResult;
        }
        catch (error) {
            rowResult.error = error.message
            return rowResult;
        }

    },

    query: async function (dbConn, query) {
        let result2 = { result: [] };
        try {
            let response = await sqlite.sqlite3.exec(dbConn, query, (row, columns) => {
                let i = 0;
                let tObj = {}; // new Object();
                while (i < row.length) {
                    tObj[columns[i]] = row[i];
                    i++;
                }
                //let tObj = Object.assign()
                result2.result.push(tObj);
                //result.data.push(row);
                //result.columns.push(columns);
            });
            console.log(JSON.stringify(result2));
            return result2.result;
        }
        catch (error)
        {
            console.error(error.message);
        }
        
    },

    showPrompt: async function(message) {
        return prompt(message, 'Type anything here');
    }
}
  
async function hello() {
    return await open2();
    //const module = await SQLiteAsyncESMFactory();
    //const sqlite3 = SQLite.Factory(module);
    //const db = await sqlite3.open_v2('myDB', 0x06);
    //await sqlite3.exec(db, `SELECT 'Hello, world!'`, (row, columns) => {
    //    console.log(row);
    //});
    //await sqlite3.close(db);
}


async function open2() {
    const asyncModule = await SQLiteAsyncESMFactory();
    const sqlite3 = SQLite.Factory(asyncModule);
    sqlite3.vfs_register(
        new IDBBatchAtomicVFS("dbName"));//, { durability: "relaxed" })
    //);
    const connection = await sqlite3.open_v2(
        "myAppName",
        SQLite.SQLITE_OPEN_CREATE |
        SQLite.SQLITE_OPEN_READWRITE |
        SQLite.SQLITE_OPEN_URI,
        "dbName"
    );
    return connection;
}
