const paymentMethods = {
    "success": true,
    "activeRouter": "juspay",
    "lastTransaction": {
        "payment": "Paytm UPI",
        "module": "paytm",
        "upiIntents": [
            "PhonePe",
            "Google Pay",
            "PayTM",
            "QRCode"
        ]
    },
    "results": [
        {
            "pg_name": "juspay",
            "pg_id": 12,
            "paymentMethods": [
                {
                    "UPI": {
                        "display_name": "UPI",
                        "min_amount": 10,
                        "max_amount": 99999,
                        "list": [
                            {
                                "name": "UPI",
                                "description": "UPI",
                                "code": "JP_UPI"
                            },
                            {
                                "name": "UPI_QR",
                                "description": "UPI QR",
                                "code": "UPI_QR"
                            }
                        ]
                    },
                    "CARD": {
                        "display_name": "Credit Card / Debit Card",
                        "min_amount": null,
                        "max_amount": null,
                        "list": [
                            {
                                "name": "MASTER",
                                "description": "Mastercard"
                            },
                            {
                                "name": "RUPAY",
                                "description": "Rupay"
                            },
                            {
                                "name": "VISA",
                                "description": "Visa"
                            },
                            {
                                "name": "AMEX",
                                "description": "American Express"
                            },
                            {
                                "name": "MASTERCARD",
                                "description": "Mastercard"
                            }
                        ]
                    },
                    "NB": {
                        "display_name": "Net Banking",
                        "min_amount": null,
                        "max_amount": null,
                        "list": [
                            {
                                "name": "NB_AXIS",
                                "description": "Axis Bank",
                                "code": "JP_AXIS"
                            },
                            {
                                "name": "NB_HDFC",
                                "description": "HDFC Bank",
                                "code": "JP_HDFC"
                            },
                            {
                                "name": "NB_SBI",
                                "description": "State Bank of India",
                                "code": "JP_SBI"
                            },
                            {
                                "name": "NB_ICICI",
                                "description": "ICICI Netbanking",
                                "code": "JP_ICICI"
                            },
                            {
                                "name": "NB_KOTAK",
                                "description": "Kotak Bank",
                                "code": "JP_KOTAK"
                            },
                            {
                                "name": "NB_ANDHRA",
                                "description": "Andhra Bank",
                                "code": "JP_ANDHRA"
                            },
                            {
                                "name": "NB_BOB",
                                "description": "Bank of Baroda",
                                "code": "JP_BOB"
                            },
                            {
                                "name": "NB_BOI",
                                "description": "Bank of India",
                                "code": "JP_BOI"
                            },
                            {
                                "name": "NB_BOM",
                                "description": "Bank of Maharashtra",
                                "code": "JP_BOM"
                            },
                            {
                                "name": "NB_CBI",
                                "description": "Central Bank Of India",
                                "code": "JP_CBI"
                            },
                            {
                                "name": "NB_CSB",
                                "description": "Catholic Syrian Bank",
                                "code": "JP_CSB"
                            },
                            {
                                "name": "NB_DCB",
                                "description": "DCB Bank",
                                "code": "JP_DCB"
                            },
                            {
                                "name": "NB_DLS",
                                "description": "Dhanalaxmi Bank",
                                "code": "JP_DLS"
                            },
                            {
                                "name": "NB_IDBI",
                                "description": "Industrial Development Bank of India",
                                "code": "JP_IDBI"
                            },
                            {
                                "name": "NB_IDFC",
                                "description": "IDFC Bank",
                                "code": "JP_IDFC"
                            },
                            {
                                "name": "NB_INDB",
                                "description": "Indian Bank",
                                "code": "JP_INDB"
                            },
                            {
                                "name": "NB_INDUS",
                                "description": "IndusInd Bank",
                                "code": "JP_INDUS"
                            },
                            {
                                "name": "NB_IOB",
                                "description": "Indian Overseas Bank",
                                "code": "JP_IOB"
                            },
                            {
                                "name": "NB_KARN",
                                "description": "Karnataka Bank",
                                "code": "JP_KARN"
                            },
                            {
                                "name": "NB_KVB",
                                "description": "Karur Vysya",
                                "code": "JP_KVB"
                            },
                            {
                                "name": "NB_PNB",
                                "description": "Punjab National Bank Retail",
                                "code": "JP_PNB"
                            },
                            {
                                "name": "NB_RBL",
                                "description": "RBL",
                                "code": "JP_RBL"
                            },
                            {
                                "name": "NB_SARASB",
                                "description": "Saraswat Bank",
                                "code": "JP_SARASB"
                            },
                            {
                                "name": "NB_SOIB",
                                "description": "South Indian Bank",
                                "code": "JP_SOIB"
                            },
                            {
                                "name": "NB_UBI",
                                "description": "Union Bank of India",
                                "code": "JP_UBI"
                            },
                            {
                                "name": "NB_UCOB",
                                "description": "UCO Bank",
                                "code": "JP_UCOB"
                            },
                            {
                                "name": "NB_YESB",
                                "description": "Yes Bank",
                                "code": "JP_YESB"
                            },
                            {
                                "name": "NB_COSMOS",
                                "description": "Cosmos Bank",
                                "code": "JP_COSMOS"
                            }
                        ]
                    }
                }
            ],
            "outage": [
                {
                    "stage": "Global",
                    "status": "DOWN",
                    "payment_method": "NB_SBI",
                    "payment_method_type": "NB",
                    "issuer_name": "State Bank of India",
                    "juspay_bank_code": "JP_SBI",
                    "description": "State Bank of India"
                },
                {
                    "stage": "Global",
                    "status": "FLUCTUATE",
                    "payment_method": "NB_AXIS",
                    "payment_method_type": "NB",
                    "issuer_name": "Axis Bank",
                    "juspay_bank_code": "JP_AXIS",
                    "description": "Axis Bank"
                },
                {
                    "stage": "Global",
                    "status": "FLUCTUATE",
                    "payment_method": "UPI",
                    "payment_method_type": "UPI",
                    "issuer_name": "upi",
                    "txn_type": "UPI_PAY",
                    "description": "Pay with UPI",
                    "sub_details": [
                        {
                            "stage": "Global",
                            "status": "DOWN",
                            "upi_app": "googlepay"
                        }
                    ]
                },
                {
                    "stage": "Merchant",
                    "status": "DOWN",
                    "payment_method": "UPI",
                    "payment_method_type": "UPI",
                    "issuer_name": "upi",
                    "txn_type": "UPI_COLLECT",
                    "description": "Pay with UPI",
                    "sub_details": [
                        {
                            "stage": "Merchant",
                            "status": "DOWN",
                            "upi_handle": "ybl"
                        }
                    ]
                },
                {
                    "stage": "Merchant",
                    "status": "DOWN",
                    "payment_method": "VISA",
                    "payment_method_type": "CARD",
                    "issuer_name": "ICICI Bank",
                    "juspay_bank_code": "JP_ICICI",
                    "description": "VISA"
                },
                {
                    "stage": "Global",
                    "status": "FLUCTUATE",
                    "payment_method": "VISA",
                    "payment_method_type": "CARD",
                    "issuer_name": "Canara Bank",
                    "juspay_bank_code": "JP_CANR",
                    "description": "VISA"
                }
            ],
            "merchantId": "YWJmcmw="
        },
        {
            "pg_name": "cashondelivery",
            "pg_id": 13,
            "paymentMethods": []
        },
        {
            "pg_name": "freeorder",
            "pg_id": 14,
            "paymentMethods": [
                {
                    "display_name": "Free Order",
                    "min_amount": null,
                    "max_amount": null
                }
            ]
        }
    ],
    "msg": ""
}
const order = {
    "success": true,
    "results": {
        "amount": 2491,
        "customer_id": "cth_6fLsCzdx2MLhzXMg",
        "date_created": "2025-06-06 16:47:44",
        "juspay": {
            "client_auth_token_expiry": "2025-06-12 12:49:48",
            "client_auth_token": "tkn_9ca3e601e9514d27a0876a3b8dcfe533"
        },
        "orderId": "181980319",
        "orderNumber": "SA181980319",
        "status": "NEW"
    },
    "msg": ""
}

const savedCards = {
    "success": true,
    "results": {
        "cards": [
            {
                "card_number": "XXXX-XXXXXXXX-4989",
                "juspay_bank_code": "JP_AXIS",
                "card_issuer": "Axis Bank",
                "expired": false,
                "card_reference": "cref_c5defc9621e3445a89fcc03c9d192fb0",
                "card_token": "tkn_49e83a3dbf8b4585825b7ce74df85f0a",
                "card_isin": "440006",
                "card_brand": "VISA",
                "card_type": "CREDIT",
                "token": {
                    "card_fingerprint": "6886iwc85332pn2c94j7sbz58",
                    "card_isin": "432699773",
                    "expiry_month": "06",
                    "expiry_year": "2028",
                    "cvv_less_support": true,
                    "last_four_digits": "1168",
                    "par": "V0010013823162054054157061010",
                    "support_token_transaction": "true",
                    "token_supported_gateways": "RAZORPAY,PAYTM_V2,GOCASHFREE,EASEBUZZ",
                    "tokenization_status": "ACTIVE"
                },
                "tokenize_support": false
            },
            {
                "card_number": "XXXX-XXXXXXXX-7006",
                "juspay_bank_code": "JP_ICICI",
                "card_issuer": "ICICI Bank",
                "expired": false,
                "card_reference": "cref_ab38f338012846bfadd5aae883a434fa",
                "card_token": "tkn_c68ae4178f2d4b8d8d8a9176d0082eab",
                "card_isin": "524193",
                "card_brand": "MASTERCARD",
                "card_type": "CREDIT",
                "token": {
                    "card_fingerprint": "c3moqek1dtdk5h4rmczciv2kg",
                    "card_isin": "55953003",
                    "expiry_month": "07",
                    "expiry_year": "2028",
                    "cvv_less_support": true,
                    "last_four_digits": "6115",
                    "par": "50013YRTYJDPXWVUWNSQ1KVPX1CQR",
                    "support_token_transaction": "true",
                    "token_supported_gateways": "RAZORPAY,PAYTM_V2,GOCASHFREE,EASEBUZZ",
                    "tokenization_status": "ACTIVE"
                },
                "tokenize_support": false
            },
            {
                "card_number": "XXXX-XXXXXXXX-2240",
                "juspay_bank_code": "JP_ICICI",
                "card_issuer": "ICICI Bank",
                "expired": false,
                "card_reference": "cref_d95cf426607c482994a64d275da8554d",
                "card_token": "tkn_7a56e03e849c4dae9b76c849645fecb9",
                "card_isin": "483834",
                "card_brand": "VISA",
                "card_type": "DEBIT",
                "token": {
                    "card_fingerprint": "kfn7qinno8ph2ze11txkqka1i",
                    "card_isin": "442655874",
                    "expiry_month": "12",
                    "expiry_year": "2031",
                    "cvv_less_support": true,
                    "last_four_digits": "3694",
                    "par": "V0010013925067503858280036501",
                    "support_token_transaction": "true",
                    "token_supported_gateways": "RAZORPAY,PAYTM_V2,GOCASHFREE,EASEBUZZ",
                    "tokenization_status": "ACTIVE"
                },
                "tokenize_support": false
            },
            {
                "card_number": "XXXX-XXXXXXXX-3283",
                "juspay_bank_code": "JP_HDFC",
                "card_issuer": "HDFC Bank",
                "expired": false,
                "card_reference": "cref_260d9b93217143a5b273f5af0f7866f7",
                "card_token": "tkn_c31f13882a4e4cac8721d6d5817ea25b",
                "card_isin": "416021",
                "card_brand": "VISA",
                "card_type": "DEBIT",
                "token": {
                    "card_fingerprint": "2b7278v2ah3vkt64ufiz87zt9a",
                    "card_isin": "461015185",
                    "expiry_month": "12",
                    "expiry_year": "2030",
                    "cvv_less_support": true,
                    "last_four_digits": "0659",
                    "par": "V0010013824102272338486554598",
                    "support_token_transaction": "true",
                    "token_supported_gateways": "RAZORPAY,PAYTM_V2,GOCASHFREE,EASEBUZZ",
                    "tokenization_status": "ACTIVE"
                },
                "tokenize_support": false
            },
            {
                "card_number": "XXXX-XXXXXXXX-5191",
                "juspay_bank_code": "JP_SBI",
                "card_issuer": "SBI",
                "expired": false,
                "card_reference": "cref_aa547d9e9a794821ab7018d3d193fb0d",
                "card_token": "tkn_eff2f6fc3c8d42818fb15ce8a0378c29",
                "card_isin": "544670",
                "card_brand": "MASTERCARD",
                "card_type": "DEBIT",
                "token": {
                    "card_fingerprint": "evprmeb6nmjgdaaw8iks16ve4",
                    "card_isin": "54177054",
                    "expiry_month": "05",
                    "expiry_year": "2028",
                    "cvv_less_support": true,
                    "last_four_digits": "0275",
                    "par": "5001DEGE0121KHNH6FZQTIM2BSN4G",
                    "support_token_transaction": "true",
                    "token_supported_gateways": "RAZORPAY,PAYTM_V2,GOCASHFREE,EASEBUZZ",
                    "tokenization_status": "ACTIVE"
                },
                "tokenize_support": false
            },
            {
                "card_number": "XXXX-XXXXXXXX-5119",
                "juspay_bank_code": "JP_AXIS",
                "card_issuer": "Axis Bank",
                "expired": false,
                "card_reference": "cref_ad768a52731649cdb8f98e53ab42806d",
                "card_token": "tkn_bd77e895d42d404780707538b8a827a6",
                "card_isin": "440006",
                "card_brand": "VISA",
                "card_type": "CREDIT",
                "token": {
                    "card_fingerprint": "hhazjjgj6zzw56s88yqk2nha6",
                    "card_isin": "438829130",
                    "expiry_month": "04",
                    "expiry_year": "2027",
                    "cvv_less_support": true,
                    "last_four_digits": "1711",
                    "par": "V0010015822116336061583646267",
                    "support_token_transaction": "true",
                    "token_supported_gateways": "RAZORPAY,PAYTM_V2,GOCASHFREE,EASEBUZZ",
                    "tokenization_status": "ACTIVE"
                },
                "tokenize_support": false
            },
            {
                "card_number": "XXXX-XXXXXXXX-2007",
                "juspay_bank_code": "JP_ICICI",
                "card_issuer": "ICICI Bank",
                "expired": false,
                "card_reference": "cref_7be2636b5f5347c1ac9fc0920e646970",
                "card_token": "tkn_fa2591b95fd14bbca25de875b95a779f",
                "card_isin": "474846",
                "card_brand": "VISA",
                "card_type": "CREDIT",
                "token": {
                    "card_fingerprint": "hardvorgz5bxzh7n1kt95c2tc",
                    "card_isin": "463529601",
                    "expiry_month": "01",
                    "expiry_year": "2029",
                    "cvv_less_support": true,
                    "last_four_digits": "6561",
                    "par": "V0010015822090511791430531853",
                    "support_token_transaction": "true",
                    "token_supported_gateways": "RAZORPAY,PAYTM_V2,GOCASHFREE,EASEBUZZ",
                    "tokenization_status": "ACTIVE"
                },
                "tokenize_support": false
            },
            {
                "card_number": "XXXX-XXXXXXXX-4935",
                "juspay_bank_code": "JP_HDFC",
                "card_issuer": "HDFC Bank",
                "expired": false,
                "card_reference": "cref_468b39a26cae4f269af84ff7aacd65cc",
                "card_token": "tkn_c5ca04d85e7b4856ace9bca29b22ac07",
                "card_isin": "416021",
                "card_brand": "VISA",
                "card_type": "DEBIT",
                "token": {
                    "card_fingerprint": "8x634bte3c8z39vw8e8tedumy",
                    "card_isin": "445304886",
                    "expiry_month": "09",
                    "expiry_year": "2030",
                    "cvv_less_support": true,
                    "last_four_digits": "7452",
                    "par": "V0010014024167574223658100830",
                    "support_token_transaction": "true",
                    "token_supported_gateways": "RAZORPAY,PAYTM_V2,GOCASHFREE,EASEBUZZ",
                    "tokenization_status": "ACTIVE"
                },
                "tokenize_support": false
            },
            {
                "card_number": "XXXX-XXXXXXXX-3802",
                "juspay_bank_code": "JP_HDFC",
                "card_issuer": "HDFC Bank",
                "expired": false,
                "card_reference": "cref_7312e2d693c34b34af20317a210ff197",
                "card_token": "tkn_f178c40d38fa422981c736cfd475b448",
                "card_isin": "485498",
                "card_brand": "VISA",
                "card_type": "CREDIT",
                "token": {
                    "card_fingerprint": "8b8mvi98ucoxtwgtq4co4jpaf",
                    "card_isin": "432802060",
                    "expiry_month": "02",
                    "expiry_year": "2028",
                    "cvv_less_support": true,
                    "last_four_digits": "5241",
                    "par": "V0010014620077330791016437699",
                    "support_token_transaction": "true",
                    "token_supported_gateways": "RAZORPAY,PAYTM_V2,GOCASHFREE,EASEBUZZ",
                    "tokenization_status": "ACTIVE"
                },
                "tokenize_support": false
            },
            {
                "card_number": "XXXX-XXXXXXXX-6700",
                "juspay_bank_code": "JP_AXIS",
                "card_issuer": "Axis Bank",
                "expired": false,
                "card_reference": "cref_b6ef2f4cf6a24470b83ce17fefaad02e",
                "card_token": "tkn_855f9e432cb34525ba35691c20d0541d",
                "card_isin": "652236",
                "card_brand": "RUPAY",
                "card_type": "DEBIT",
                "token": {
                    "card_fingerprint": "2p14fcgwqizn72eyyog1nz6hhm",
                    "card_isin": "652836009",
                    "expiry_month": "01",
                    "expiry_year": "2026",
                    "cvv_less_support": false,
                    "last_four_digits": "0799",
                    "par": "1b76c223-018c-42f2-a5b8-0703f9f9d7fb",
                    "support_token_transaction": "true",
                    "token_supported_gateways": "RAZORPAY,PAYTM_V2,GOCASHFREE,EASEBUZZ",
                    "tokenization_status": "ACTIVE"
                },
                "tokenize_support": false
            }
        ]
    },
    "msg": ""
}