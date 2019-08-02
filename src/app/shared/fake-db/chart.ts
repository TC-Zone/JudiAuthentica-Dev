export class Chart {
    public products = [
        {
            "id": "001",
            "code": "PRO01",
            "name": "Product01",
            "po": [
                "001",
                "002",
            ]
        },
        {
            "id": "002",
            "code": "PRO02",
            "name": "Product02",
            "po": [
                "003",
                "004",
            ]
        }
    ];

    public po = [
        {
            "id": "001",
            "country": ["AF", "AX"]
        },
        {
            "id": "002",
            "country": ["AL", "DZ"]
        },
        {
            "id": "003",
            "country": ["AS", "AD"]
        },
        {
            "id": "004",
            "country": ["AO", "AI"]
        },
    ]

    public styles = [
        {
            "id": "001",
            "code": "STY01",
            "name": "Style01",
            "countries": [
                "AF",
                "AX"
            ]
        },
        {
            "id": "002",
            "code": "PRO02",
            "name": "Product02",
            "countries": [
                "AL",
                "DZ"
            ]
        }
    ];

    public countries = [
        {
            "name": "Afghanistan",
            "code": "AF"
        },
        {
            "name": "Åland Islands",
            "code": "AX"
        },
        {
            "name": "Albania",
            "code": "AL"
        },
        {
            "name": "Algeria",
            "code": "DZ"
        },
        {
            "name": "American Samoa",
            "code": "AS"
        },
        {
            "name": "AndorrA",
            "code": "AD"
        }
    ];
}