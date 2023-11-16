import React from "react";
import ReactDOM from "react-dom/client"


const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img className="logo" src="https://static.vecteezy.com/system/resources/previews/009/291/628/non_2x/restaurant-logo-design-vector.jpg" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}



const resList = [
    {
        "info": {
          "id": "46447",
          "name": "Captain Sam's Pizza",
          "cloudinaryImageId": "e1a0833bdc40ad1f6fe3185f102c9382",
          "locality": "Mohali",
          "areaName": "Sector 70",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "Pizzas",
            "Italian",
            "Beverages",
            "Desserts"
          ],
          "avgRating": 4,
          "veg": true,
          "feeDetails": {
            "restaurantId": "46447",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 10300
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 10300
          },
          "parentId": "382786",
          "avgRatingString": "4.0",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 45,
            "lastMileTravel": 8.1,
            "serviceability": "SERVICEABLE",
            "slaString": "45 mins",
            "lastMileTravelString": "8.1 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-11-16 04:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "EVERY ITEM",
            "subHeader": "@ ₹219"
          },
          "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
              "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "badgeType": "BADGE_TYPE_ONE_LITE"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          }
        },
        "analytics": {

        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/captain-sams-pizza-mohali-sector-70-chandigarh-46447",
          "type": "WEBLINK"
        }
      },
    {
    "info": {
        "id": "58374",
        "name": "Subway",
        "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
        "locality": "Mohali",
        "areaName": "Sector 70",
        "costForTwo": "₹350 for two",
        "cuisines": [
        "Healthy Food",
        "Salads",
        "Snacks",
        "Desserts",
        "Beverages"
        ],
        "avgRating": 3.9,
        "feeDetails": {
        "restaurantId": "58374",
        "fees": [
            {
            "name": "BASE_DISTANCE",
            "fee": 8600
            },
            {
            "name": "BASE_TIME"
            },
            {
            "name": "ANCILLARY_SURGE_FEE"
            }
        ],
        "totalFee": 8600
        },
        "parentId": "2",
        "avgRatingString": "3.9",
        "totalRatingsString": "10K+",
        "sla": {
        "deliveryTime": 36,
        "lastMileTravel": 7.1,
        "serviceability": "SERVICEABLE",
        "slaString": "36 mins",
        "lastMileTravelString": "7.1 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2023-11-22 00:00:00",
        "opened": true
        },
        "badges": {

        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
            "imageBased": {

            },
            "textBased": {

            },
            "textExtendedBadges": {

            }
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹599",
        "discountTag": "FLAT DEAL"
        },
        "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
        },
        "freedelMessage": "FREE DELIVERY",
        "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {

            },
            "video": {

            }
        }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        }
    },
    "analytics": {

    },
    "cta": {
        "link": "https://www.swiggy.com/restaurants/subway-mohali-sector-70-chandigarh-58374",
        "type": "WEBLINK"
    }
    },
    {
    "info": {
        "id": "240666",
        "name": "Burger King",
        "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        "locality": "SAS Nagar",
        "areaName": "Greater Mohali",
        "costForTwo": "₹350 for two",
        "cuisines": [
        "Burgers",
        "American"
        ],
        "avgRating": 4.2,
        "feeDetails": {
        "restaurantId": "240666",
        "fees": [
            {
            "name": "BASE_DISTANCE",
            "fee": 4800
            },
            {
            "name": "BASE_TIME"
            },
            {
            "name": "ANCILLARY_SURGE_FEE"
            }
        ],
        "totalFee": 4800
        },
        "parentId": "166",
        "avgRatingString": "4.2",
        "totalRatingsString": "5K+",
        "sla": {
        "deliveryTime": 46,
        "lastMileTravel": 4.1,
        "serviceability": "SERVICEABLE",
        "slaString": "46 mins",
        "lastMileTravelString": "4.1 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2023-11-16 06:00:00",
        "opened": true
        },
        "badges": {

        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
            "imageBased": {

            },
            "textBased": {

            },
            "textExtendedBadges": {

            }
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
        },
        "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
        },
        "freedelMessage": "FREE DELIVERY",
        "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {

            },
            "video": {

            }
        }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        }
    },
    "analytics": {

    },
    "cta": {
        "link": "https://www.swiggy.com/restaurants/burger-king-sas-nagar-greater-mohali-chandigarh-240666",
        "type": "WEBLINK"
    }
    },
    {
    "info": {
        "id": "389818",
        "name": "Pizza Hut",
        "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
        "locality": "Landra Road",
        "areaName": "S.A.S Nagar",
        "costForTwo": "₹350 for two",
        "cuisines": [
        "Pizzas"
        ],
        "avgRating": 3.9,
        "feeDetails": {
        "restaurantId": "389818",
        "fees": [
            {
            "name": "BASE_DISTANCE",
            "fee": 4800
            },
            {
            "name": "BASE_TIME"
            },
            {
            "name": "ANCILLARY_SURGE_FEE"
            }
        ],
        "totalFee": 4800
        },
        "parentId": "721",
        "avgRatingString": "3.9",
        "totalRatingsString": "1K+",
        "sla": {
        "deliveryTime": 41,
        "lastMileTravel": 4.1,
        "serviceability": "SERVICEABLE",
        "slaString": "41 mins",
        "lastMileTravelString": "4.1 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2023-11-16 04:00:00",
        "opened": true
        },
        "badges": {

        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
            "imageBased": {

            },
            "textBased": {

            },
            "textExtendedBadges": {

            }
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "₹150 OFF",
        "subHeader": "ABOVE ₹499",
        "discountTag": "FLAT DEAL"
        },
        "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
        },
        "freedelMessage": "FREE DELIVERY",
        "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {

            },
            "video": {

            }
        }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        }
    },
    "analytics": {

    },
    "cta": {
        "link": "https://www.swiggy.com/restaurants/pizza-hut-landra-road-s-a-s-nagar-chandigarh-389818",
        "type": "WEBLINK"
    }
    },
    {
    "info": {
        "id": "49692",
        "name": "Domino's Pizza",
        "cloudinaryImageId": "mprat173vnnvwloj23g4",
        "locality": "Phase 3",
        "areaName": "Sector 60",
        "costForTwo": "₹400 for two",
        "cuisines": [
        "Pizzas",
        "Italian",
        "Pastas",
        "Desserts"
        ],
        "avgRating": 4.3,
        "feeDetails": {
        "restaurantId": "49692",
        "fees": [
            {
            "name": "BASE_DISTANCE",
            "fee": 8600
            },
            {
            "name": "BASE_TIME"
            },
            {
            "name": "ANCILLARY_SURGE_FEE"
            }
        ],
        "totalFee": 8600
        },
        "parentId": "2456",
        "avgRatingString": "4.3",
        "totalRatingsString": "5K+",
        "sla": {
        "deliveryTime": 53,
        "lastMileTravel": 7.2,
        "serviceability": "SERVICEABLE",
        "slaString": "53 mins",
        "lastMileTravelString": "7.2 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2023-11-16 01:59:00",
        "opened": true
        },
        "badges": {

        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
            "imageBased": {

            },
            "textBased": {

            },
            "textExtendedBadges": {

            }
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "₹101 OFF",
        "subHeader": "ABOVE ₹999",
        "discountTag": "FLAT DEAL"
        },
        "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
        },
        "freedelMessage": "FREE DELIVERY",
        "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {

            },
            "video": {

            }
        }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        }
    },
    "analytics": {

    },
    "cta": {
        "link": "https://www.swiggy.com/restaurants/dominos-pizza-phase-3-sector-60-chandigarh-49692",
        "type": "WEBLINK"
    }
    },
    {
    "info": {
        "id": "394709",
        "name": "La Pino'z Pizza",
        "cloudinaryImageId": "yktlyyi25eysag2wu1jm",
        "locality": "North Mohali",
        "areaName": "Sector 59",
        "costForTwo": "₹300 for two",
        "cuisines": [
        "Pizzas",
        "Pastas",
        "Italian",
        "Desserts",
        "Beverages"
        ],
        "avgRating": 3.9,
        "feeDetails": {
        "restaurantId": "394709",
        "fees": [
            {
            "name": "BASE_DISTANCE",
            "fee": 8600
            },
            {
            "name": "BASE_TIME"
            },
            {
            "name": "ANCILLARY_SURGE_FEE"
            }
        ],
        "totalFee": 8600
        },
        "parentId": "4961",
        "avgRatingString": "3.9",
        "totalRatingsString": "5K+",
        "sla": {
        "deliveryTime": 44,
        "lastMileTravel": 7.5,
        "serviceability": "SERVICEABLE",
        "slaString": "44 mins",
        "lastMileTravelString": "7.5 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2023-11-15 23:59:00",
        "opened": true
        },
        "badges": {

        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
            "imageBased": {

            },
            "textBased": {

            },
            "textExtendedBadges": {

            }
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "₹101 OFF",
        "subHeader": "ABOVE ₹699",
        "discountTag": "FLAT DEAL"
        },
        "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
        },
        "freedelMessage": "FREE DELIVERY",
        "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {

            },
            "video": {

            }
        }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        }
    },
    "analytics": {

    },
    "cta": {
        "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-north-mohali-sector-59-chandigarh-394709",
        "type": "WEBLINK"
    }
    },
    {
    "info": {
        "id": "210889",
        "name": "Faasos - Wraps & Rolls",
        "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
        "locality": "Mohali",
        "areaName": "Sector 59",
        "costForTwo": "₹500 for two",
        "cuisines": [
        "Kebabs",
        "Fast Food",
        "Snacks",
        "North Indian",
        "American",
        "Healthy Food",
        "Desserts",
        "Beverages"
        ],
        "avgRating": 4.3,
        "feeDetails": {
        "restaurantId": "210889",
        "fees": [
            {
            "name": "BASE_DISTANCE",
            "fee": 8600
            },
            {
            "name": "BASE_TIME"
            },
            {
            "name": "ANCILLARY_SURGE_FEE"
            }
        ],
        "totalFee": 8600
        },
        "parentId": "21809",
        "avgRatingString": "4.3",
        "totalRatingsString": "1K+",
        "sla": {
        "deliveryTime": 59,
        "lastMileTravel": 7.4,
        "serviceability": "SERVICEABLE",
        "slaString": "59 mins",
        "lastMileTravelString": "7.4 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2023-11-15 23:59:00",
        "opened": true
        },
        "badges": {
        "textExtendedBadges": [
            {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
            }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
            "imageBased": {

            },
            "textBased": {

            },
            "textExtendedBadges": {
            "badgeObject": [
                {
                "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                }
                }
            ]
            }
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL"
        },
        "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
        },
        "freedelMessage": "FREE DELIVERY",
        "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {

            },
            "video": {

            }
        }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        }
    },
    "analytics": {

    },
    "cta": {
        "link": "https://www.swiggy.com/restaurants/faasos-wraps-and-rolls-mohali-sector-59-chandigarh-210889",
        "type": "WEBLINK"
    }
    },
    {
    "info": {
        "id": "342580",
        "name": "The Belgian Waffle Co.",
        "cloudinaryImageId": "846dab8cca3c56a482d7cbcda0dd0eb9",
        "locality": "SAS Nagar",
        "areaName": "Sector 60",
        "costForTwo": "₹200 for two",
        "cuisines": [
        "Waffle",
        "Desserts",
        "Ice Cream",
        "Beverages"
        ],
        "avgRating": 4.4,
        "veg": true,
        "feeDetails": {
        "restaurantId": "342580",
        "fees": [
            {
            "name": "BASE_DISTANCE",
            "fee": 8600
            },
            {
            "name": "BASE_TIME"
            },
            {
            "name": "ANCILLARY_SURGE_FEE"
            }
        ],
        "totalFee": 8600
        },
        "parentId": "2233",
        "avgRatingString": "4.4",
        "totalRatingsString": "1K+",
        "sla": {
        "deliveryTime": 52,
        "lastMileTravel": 7.5,
        "serviceability": "SERVICEABLE",
        "slaString": "52 mins",
        "lastMileTravelString": "7.5 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2023-11-16 02:00:00",
        "opened": true
        },
        "badges": {

        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
            "imageBased": {

            },
            "textBased": {

            },
            "textExtendedBadges": {

            }
        }
        },
        "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
        },
        "freedelMessage": "FREE DELIVERY",
        "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {

            },
            "video": {

            }
        }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        }
    },
    "analytics": {

    },
    "cta": {
        "link": "https://www.swiggy.com/restaurants/the-belgian-waffle-co-sas-nagar-sector-60-chandigarh-342580",
        "type": "WEBLINK"
    }
    },
    {
    "info": {
        "id": "210894",
        "name": "Oven Story Pizza - Standout Toppings",
        "cloudinaryImageId": "ab979bffbd658e74de650a15ca0092a3",
        "locality": "Mohali",
        "areaName": "Sector 59",
        "costForTwo": "₹400 for two",
        "cuisines": [
        "Pizzas",
        "Pastas",
        "Italian",
        "Desserts",
        "Beverages"
        ],
        "avgRating": 3.9,
        "feeDetails": {
        "restaurantId": "210894",
        "fees": [
            {
            "name": "BASE_DISTANCE",
            "fee": 9300
            },
            {
            "name": "BASE_TIME"
            },
            {
            "name": "ANCILLARY_SURGE_FEE"
            }
        ],
        "totalFee": 9300
        },
        "parentId": "3534",
        "avgRatingString": "3.9",
        "totalRatingsString": "1K+",
        "sla": {
        "deliveryTime": 54,
        "lastMileTravel": 7.4,
        "serviceability": "SERVICEABLE",
        "slaString": "54 mins",
        "lastMileTravelString": "7.4 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2023-11-15 23:59:00",
        "opened": true
        },
        "badges": {

        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
            "imageBased": {

            },
            "textBased": {

            },
            "textExtendedBadges": {

            }
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "₹151 OFF",
        "subHeader": "ABOVE ₹1099",
        "discountTag": "FLAT DEAL"
        },
        "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
        },
        "freedelMessage": "FREE DELIVERY",
        "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {

            },
            "video": {

            }
        }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        }
    },
    "analytics": {

    },
    "cta": {
        "link": "https://www.swiggy.com/restaurants/oven-story-pizza-standout-toppings-mohali-sector-59-chandigarh-210894",
        "type": "WEBLINK"
    }
    }    
];





const Restaurantcard = (props) => {
    const { resData } = props;
    // console.log(resData);
    console.log(resData.info.cloudinaryImageId);

    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId } />
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(", ")}</h4>
            <h4>{resData.info.avgRating} stars</h4>
            <h4>{resData.info.costForTwo}</h4>
            <h4>{resData.info.sla.deliveryTime} minutes</h4>
        </div>
    )
}


const Body = () => {
    return (
        <div className="Body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                <Restaurantcard resData={resList[0]} />
                <Restaurantcard resData={resList[1]} />
                <Restaurantcard resData={resList[2]} />
                <Restaurantcard resData={resList[3]} />
                <Restaurantcard resData={resList[4]} />
                <Restaurantcard resData={resList[5]} />
                

            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);