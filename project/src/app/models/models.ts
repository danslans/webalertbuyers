export interface ResponseAlertPayer{
    message:string,
    forecast_code:number,
    forecast_description:string,
    buyer_notification:boolean,
}

export interface ResponseShowNotifications {
    date:string,
    idEmail:string,
    location:string,
    weatherForecast:string,
}

export interface RequestAlertPayer {
    email:string,
    location:Location
}   

export interface Location{
    latitude:string,
    longitude:string
}