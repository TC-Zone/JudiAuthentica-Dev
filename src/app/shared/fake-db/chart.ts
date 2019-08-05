export class Chart {
    public products = [
        {
            "id": "001",
            "code": "PRO01",
            "name": "Product01",
            "total_auth": 1000,
            "factories": 20,
            "merchandizers": 30,
            "customer": 200,
            "country": [
                { "name": "Afghanistan", "sale": 400 },
                { "name": "Åland Islands", "sale": 500 },
            ]
        },
        {
            "id": "002",
            "code": "PRO02",
            "name": "Product02",
            "total_auth": 1500,
            "factories": 25,
            "merchandizers": 60,
            "customer": 270,
            "country": [
                { "name": "Albania", "sale": 300 },
                { "name": "Algeria", "sale": 600 },
            ]
        }
    ];

    public country = [
        {
            "name": "Afghanistan",
            "code": "AF",
            "total_auth": 1430,
            "factories": 50,
            "merchandizers": 80,
            "customer": 230,
            "region": [
                { "name": "region1", "sale": 200 },
                { "name": "region2", "sale": 300 }
            ]
        },
        {
            "name": "Åland Islands",
            "code": "AX",
            "total_auth": 3000,
            "factories": 95,
            "merchandizers": 64,
            "customer": 820,
            "region": [
                { "name": "region3", "sale": 500 },
                { "name": "region4", "sale": 300 }
            ]
        },
        {
            "name": "Albania",
            "code": "AL",
            "total_auth": 5050,
            "factories": 75,
            "merchandizers": 62,
            "customer": 400,
            "region": [
                { "name": "region5", "sale": 250 },
                { "name": "region6", "sale": 450 }
            ]
        },
        {
            "name": "Algeria",
            "code": "DZ",
            "total_auth": 3790,
            "factories": 100,
            "merchandizers": 84,
            "customer": 890,
            "region": [
                { "name": "region7", "sale": 600 },
                { "name": "region8", "sale": 300 }
            ]
        },

    ];


}