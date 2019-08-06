export class Chart {

    public products = [
        {
            "id": "001",
            "code": "PRO01",
            "name": "ADIDAS Questar ride shoes",
            "total_auth": 1000,
            "factories": 20,
            "merchandizers": 30,
            "customer": 200,
            "country": [
                { "name": "Canada", "code": "CA", "sale": 400 },
                { "name": "United States", "code": "US", "sale": 500 },
            ]
        },
        {
            "id": "002",
            "code": "PRO02",
            "name": "ADIDAS Galaxy 4 shoes",
            "total_auth": 1500,
            "factories": 25,
            "merchandizers": 60,
            "customer": 270,
            "country": [
                { "name": "Italy", "code": "IT", "sale": 300 },
                { "name": "France", "code": "FR", "sale": 600 },
            ]
        }
    ];



    public country = [
        {
            "name": "Canada",
            "code": "CA",
            "total_auth": 1430,
            "factories": 50,
            "merchandizers": 80,
            "customer": 230,
            "region": [
                { "name": "Nova Scotia", "sale": 540 },
                { "name": "Canadian Prairies", "sale": 460 }
            ]
        },
        {
            "name": "United States",
            "code": "US",
            "total_auth": 3000,
            "factories": 95,
            "merchandizers": 64,
            "customer": 820,
            "region": [
                { "name": "Alaska", "sale": 500 },
                { "name": "Georgia", "sale": 300 }
            ]
        },
        {
            "name": "Italy",
            "code": "IT",
            "total_auth": 5050,
            "factories": 75,
            "merchandizers": 62,
            "customer": 400,
            "region": [
                { "name": "Rome", "sale": 250 },
                { "name": "Verona", "sale": 450 }
            ]
        },
        {
            "name": "France",
            "code": "FR",
            "total_auth": 3790,
            "factories": 100,
            "merchandizers": 84,
            "customer": 890,
            "region": [
                { "name": "Burgundy", "sale": 600 },
                { "name": "Paris", "sale": 300 }
            ]
        },

    ];


}
