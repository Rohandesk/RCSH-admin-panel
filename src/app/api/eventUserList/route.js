// import { fetchWithAuth } from '@/utils/getResponse';
import { NextResponse } from 'next/server';

export async function GET(req) {
    const headers = req.headers
    const userAgent = headers.get('authorization')
    try {
        const response = await fetch(
            `https://50490f1d5faa.ngrok-free.app/api/eventList`,
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImE2NTg4ZGI1LWMzNWQtNGNjZS05NzY3LTMxMDExMWQ3ZGZkOCIsImZpcnN0TmFtZSI6IkphbWVzIiwibGFzdE5hbWUiOiJKb2huc29uIiwiZW1haWwiOiJqYW1lcy5qb2huc29uMzk0QGV4YW1wbGUuY29tIiwicGhvbmUiOiIrMS05NTUtNzYwMyIsImlzQWRtaW4iOnRydWUsImNyZWF0ZWRBdCI6IjIwMjUtMDgtMDRUMDc6NDg6MDguMzM5WiIsInVwZGF0ZWRBdCI6IjIwMjUtMDgtMjFUMTA6NDc6MDMuMTA5WiIsIl9yaWQiOiJSd05RQU01NHFZd0JBQUFBQUFBQUFBPT0iLCJfc2VsZiI6ImRicy9Sd05RQUE9PS9jb2xscy9Sd05RQU01NHFZdz0vZG9jcy9Sd05RQU01NHFZd0JBQUFBQUFBQUFBPT0vIiwiX2V0YWciOiJcIjEzMDBjMGM0LTAwMDAtMDgwMC0wMDAwLTY4YjE3ODNhMDAwMFwiIiwiX2F0dGFjaG1lbnRzIjoiYXR0YWNobWVudHMvIiwic2Vzc2lvblN0YXJ0ZWQiOnRydWUsIl90cyI6MTc1NjQ2MTExNCwiaWF0IjoxNzU2NzEyMzIzLCJleHAiOjE3NTY3NDgzMjN9.vPA1EowxHd_TOEcrq0-lBtDbMpvMiS3MR_bROxOxkac`,
                    "Ocp-Apim-Subscription-Key":
                        process.env.API_SUBSCRIPTION_KEY,
                },
            }
        );
        const data = await response.json();
        return NextResponse.json({ data: data.value },{status:response.status, message:data?.message });
    } catch (error) {
        console.log("Error fetching event list:", error);
        return NextResponse.json({status:error},{status:error });
    }
}
