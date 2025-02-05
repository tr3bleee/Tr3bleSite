import {app} from "@/app/api/[[...slugs]]/core";

const mainApp = app
    .get('/api', () => 'hi')

export const dynamic = 'force-dynamic'

export const GET = (request: Request) => mainApp.handle(request)
export const POST = (request: Request) => mainApp.handle(request)