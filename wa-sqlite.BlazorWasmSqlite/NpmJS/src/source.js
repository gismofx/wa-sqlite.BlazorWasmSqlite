require('@xmtp/wa-sqlite');
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
    execute: async function (dbConn, sql, parameters = null) {
        
        //let result = {changes: 0 ,response: null, data:"", error:""};
        //try {
        //    let response = await sqlite.sqlite3.exec(dbConn, query, (row, columns) => {
        //        result.data = row[0];
        //        console.log(columns);
        //    });
        //    result.response = response;
        //    result.changes = sqlite.sqlite3.changes(dbConn);
        //    return result;
        //}
        //catch (error) {
        //    result.error = error.message
        //    return result;
        //}
        //let result = { result: [] };
        let result = { changes: 0, response: null, data: "", error: "" };

        for await (const stmt of sqlite.sqlite3.statements(dbConn, sql)) {

            if (parameters != null) {
                let bindresult = await sqlite.sqlite3.bind_collection(stmt, parameters);
                if (bindresult != SQLite.SQLITE_OK) {
                    console.error("unable to prepare");
                    result.error = "Unable to Prepare statement. Check your syntax or parameters";
                    return result;
                }
            }
            console.log("Sql: " + sqlite.sqlite3.sql(stmt));
            //console.log("Sql: " + sqlite.sqlite3.expanded_sql(stmt));
            let columns;
            try {
                while (await sqlite.sqlite3.step(stmt) === SQLite.SQLITE_ROW) {
                    columns = columns ?? sqlite.sqlite3.column_names(stmt);
                    //const row = sqlite.sqlite3.row(stmt);
                    //let rowObj = resultToRow(columns, row);
                    //result.result.push(resultToRow(columns, row));
                    result.response = response;
                    result.changes = sqlite.sqlite3.changes(dbConn);
                }
            }
            catch (error) {
                console.log(error.message);
                result.error = error.message
                //    return result;
            }
        }
        return result;

    },



    /*
    Execute a query.
    If you have a parameterized statement, you can send a collection of parameters
    dbConn:int -  The open db connection
    sql:string - The sql statement(parameterized or not)
    parameters:dictionary/object - contains the parameters you for your sql statement
    */
    query: async function (dbConn, sql, parameters = null) {
        let result = { data: [], error: "" };
        try {
            for await (const stmt of sqlite.sqlite3.statements(dbConn, sql)) {
                if (parameters != null) {
                    let bindresult = await sqlite.sqlite3.bind_collection(stmt, parameters);
                    if (bindresult != SQLite.SQLITE_OK) {
                        console.error("unable to prepare");
                        return null;
                    }
                }
                //Execute the statement(s)
                try {
                    let columns;
                    while (await sqlite.sqlite3.step(stmt) === SQLite.SQLITE_ROW) {
                        columns = columns ?? sqlite.sqlite3.column_names(stmt);
                        const row = sqlite.sqlite3.row(stmt);
                        //let rowObj = resultToRow(columns, row);
                        result.data.push(resultToRow(columns, row));
                    }
                }
                catch (error) {
                    result.error = error.message
                    console.log("Query Error: " + error.message);
                    //return null;
                }
            }
        }
        catch (error) {
            console.log("Query Error when preparing statements: " + error.message);
            result.error = error.message;
            return result;
        }
        
        

        

        return result; // SQLite.SQLITE_OK;
    },
    /*
    queryold: async function (dbConn, query) {
        let result2 = { result: [], error='' };
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
        catch (error) {
            console.error(error.message);
        }

    },
    */
    //showPrompt: async function(message) {
    //    return prompt(message, 'Type anything here');
    //}
}

//Helper Function to convert the query result to a object with properties that can we sent back to .Net as JSON and deserialized into a c# object
function resultToRow(columns, rowData) {
    let i = 0;
    let tObj = {}; // new Object();
    while (i < rowData.length) {
        tObj[columns[i]] = rowData[i];
        i++;
    }
    return tObj;
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
