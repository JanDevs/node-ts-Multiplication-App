import { cretateTable } from "../domain/use-cases/create-table.use-case.js";
import { SaveFile } from "../domain/use-cases/save-file.use-case.js";

interface RunOptions {
    base: number,
    limit: number,
    showTable: boolean,
    name: string,
    destination: string
}


export class ServerApp{


    static run({ base, limit, showTable, name, destination }: RunOptions){
        console.log("Server running...");
        const table = new cretateTable().execute({ base, limit });
        const wasCreated = new SaveFile()
            .execute({ 
                fileContent: table,
                fileDestination: destination,  
                fileName: name,
            });

        if( showTable ) console.log( table );
        (wasCreated)
            ? console.log('File created')
            : console.error('File not created');
            
            
    }


}