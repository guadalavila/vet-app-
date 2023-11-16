import RNHTMLtoPDF from 'react-native-html-to-pdf';
import FileViewer from 'react-native-file-viewer';
import { Visit } from '~models/Visit';
import useAuth from './useAuth';

export const usePdf = () => {
    const { user } = useAuth();
    const createAndDownloadPDF = async (fileName: string, namePet: string, data: any) => {
        const options = {
            html: renderHistoryHTML(namePet, data),
            fileName: fileName,
            directory: 'Documents',
            bgColor: '#FFFFFF',
        };
        try {
            const file = await RNHTMLtoPDF.convert(options);
            if (file.filePath) {
                try {
                    await FileViewer.open(file.filePath, { showOpenWithDialog: true });
                } catch (error) {}
            }
        } catch (error) {
            console.log(error);
        }
    };

    const renderHistoryHTML = (pet: string, visits: Visit[]) => {
        return `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Historial Médico de ${pet}</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 20px;
                }
                label {
                    display: block;
                    margin-bottom: 5px;
                    font-weight: "500";
                }
                input,
                textarea {
                    width: 100%;
                    padding: 8px;
                    margin-bottom: 10px;
                    box-sizing: border-box;
                    background-color: red;
                }
            </style>
        </head>
        <body>
            <div style="position: absolute;top: 10px;right: 10px;">
                <h3 style="color: #000;font-size:12px;">${new Date().toLocaleString('en-GB')}</h3>
            </div>
            <h2 style="#2A2F4F;font-size:26px">Historial Clínico de ${pet}</h2>
            <h3 style="color: #000;font-size:20px;">Dr: ${user?.name} ${user?.lastName}</h3>
            ${visits.map((v) => {
                return `
                <div style="margin:10px 0px">
                   <b>Fecha Visita: ${new Date(v.date).toLocaleString('en-GB', {
                       year: 'numeric',
                       month: 'numeric',
                       day: 'numeric',
                       hour12: false,
                   })}</b>
               </div>
               <div style="display: flex;justify-content: space-between;">
                   <div style="width: 45%">
                       <label for="weight">Peso (kg):</label>
                       <input type="number" id="weight" name="weight" required value=${v.weight}>
                   </div>
                   <div style="width: 45%">
   
                       <label for="temperature">Temperatura (°C):</label>
                       <input type="number" id="temperature" name="temperature" required value=${v.temperature}>

                   </div>
               </div>
               <label for="anamnestic">Anamnésico:</label>
               <textarea id="anamnestic" name="anamnestic" required>${v.anamnestic ?? ''}</textarea>
               <label for="diagnosis">Síntomas:</label>
               <input type="text" id="symptoms" name="symptoms" value=${v.symptoms ?? ''}>
               <label for="diagnosis">Diagnóstico:</label>
               <input type="text" id="diagnosis" name="diagnosis" value=${v.diagnosis ?? ''}>
               <label for="treatment">Tratamiento:</label>
               <input type="text" id="treatment" name="treatment" value=${v.treatment ?? ''}>
               <label for="hospitalization">Hospitalización:</label>
               <input type="text" id="hospitalization" name="hospitalization" value=${v.hospitalization ?? ''}>
               <hr/>
                `;
            })}           
        </body>
        </html>
        

        `;
    };

    return createAndDownloadPDF;
};
