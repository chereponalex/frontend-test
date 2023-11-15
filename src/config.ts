let dataSource: any = typeof window === "undefined" ? process : window

if (!dataSource.env) {
    dataSource = {env: {}}
}

export const config = {
    BACKEND_URL: dataSource.env.BACKEND_URL || 'http://localhost:8000'
}