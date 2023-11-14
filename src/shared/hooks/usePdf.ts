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
            // width: 700,
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
            <html>
            <style>
                table {
                    border-collapse: collapse;
                }
                td,
                th {
                    padding: 10px;
                    border-bottom: 1px solid #917FB3;
                    text-align: center;
                }
            </style>
                <h1 style="color: #2A2F4F;font-size:36px">Historial Clínico de ${pet}</h1>
                <h2 style="color: #000;font-size:20px;">Veterinaria: ${
                    typeof user?.vetId === 'object' ? user.vetId.name : ''
                }</h2>
                <h2 style="color: #000;font-size:20px;">DR: ${user?.name} ${user?.lastName} - ${user?.email}</h2>
                <h2 style="color: #000;font-size:20px">Fecha: ${new Date().toLocaleString('en-GB', {})}hs</h2>
                <hr/>
                <table cellspacing=20>
                    <thead>
                        <tr>
                                <th style="color: #000;font-size: 24px;">Fecha</th>
                                <th style="color: #000;font-size: 24px;">Peso</th>
                                <th style="color: #000;font-size: 24px;">Temp.</th>
                                <th style="color: #000;font-size: 24px;">Anamnésicos</th>
                                <th style="color: #000;font-size: 24px;">Diagnóstico</th>
                                <th style="color: #000;font-size: 24px;">Tratamiento</th>
                                <th style="color: #000;font-size: 24px;">Hospitalización</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${visits
                            .map((v) => {
                                return `
                        <tr>
                                <td style="text-align: center;" >${new Date(v.date).toLocaleString('en-GB', {
                                    year: 'numeric',
                                    month: 'numeric',
                                    day: 'numeric',
                                    hour12: false,
                                })}</td>
                                <td style="text-align: center;">${v.weight} kgs</td>
                                <td style="text-align: center;">${v.temperature} ºC</td>
                                <td style="text-align: center;">${v.anamnestic}</td>
                                <td style="text-align: center;">${v.diagnosis}</td>
                                <td style="text-align: center;">${v.treatment}</td>
                                <td style="text-align: center;">${v.hospitalization}</td>
                        </tr>
                        `;
                            })
                            .join('')}
                    </tbody>
                </table>
            </html>
        `;
    };
    return createAndDownloadPDF;
};
