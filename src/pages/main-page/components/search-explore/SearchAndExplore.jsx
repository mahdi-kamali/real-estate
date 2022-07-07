
import SearchAndExploreCard from './SearchAndExploreCard'




const SearchAndExplore = () => {




  // virtual Json Response
  const searchExploreCards = [

    {
      info: {
        cardName: '99 Chestnut Hill Ave',
        cardAddress: 'Brighton, MA 02135',
        cardPrice: '420,000',
      },
      inCategories: [
        'Duplex',
        'Vacation House',
      ],
      facilities: {
        beds: 2,
        baths: 1,
        parking: 1,
        sqft: '1,650',
      },
      agent: {
        info: {
          name: 'Thomos Handy',
          image: require('../images/search-explore/Card 2/agent/2.png'),
          imageAlt: 'Someting About Image',
          age: 28,
          email: 'ThomosHandy@gmail.com'
        },
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus temporibus eligendi aliquam vero animi, itaque ad maiores, eum sequi ut facere maxime libero porro soluta odit quasi aut voluptatum in?"
      },
      rating: {
        rate: 4,
        data: {
          labels: ['★ 5', '★ 4', '★ 3', '★ 2', '★ 1'],
          datasets: [
            {
              data: [4, 7, 2, 1, 2],
              backgroundColor: ['rgb(120,201,161)', 'rgb(175,214,135)', 'rgb(254,216,53)', 'rgb(255,180,53)', 'rgb(255,140,90)'],
              borderWidth: 0,
            },
          ],
        }
      },
      images: {
        plan: require('../images/search-explore/Card 2/plan/2.png'),
        big: require('../images/search-explore/Card 2/1.jpg'),
        medium: require('../images/search-explore/Card 2/2.jpg'),
        test: require('../images/search-explore/Card 2/2.jpg'),
        5: require('../images/search-explore/Card 2/2.jpg'),
        small: [
          require('../images/search-explore/Card 2/3.jpg'),
          require('../images/search-explore/Card 2/4.jpg'),
          require('../images/search-explore/Card 2/5.jpg'),
        ]
      },
      gallery: [
        {
          type: 'BACKGROUND',
          src: require('../images/search-explore/Card 2/1.jpg')
        },
        {
          type: 'BACKGROUND',
          src: require('../images/search-explore/Card 2/2.jpg')
        },
        {
          type: 'BACKGROUND',
          src: require('../images/search-explore/Card 2/3.jpg')
        },
        {
          type: 'BACKGROUND',
          src: require('../images/search-explore/Card 2/4.jpg')
        },
        {
          type: 'BACKGROUND',
          src: require('../images/search-explore/Card 2/5.jpg')
        },

      ],
      colorPalette: {
        colors: {
          primary: ['#F2E4D8', '#BF8563', '#BFA18F'],
          secoondary: ['#404040', '#BAB6B7']
        },
        data: {
          datasets: [
            {
              label: 'Color Palettes',
              data: [35, 25, 20, 5, 15],
              backgroundColor: [
                '#F2E4D8',
                '#BF8563',
                '#BFA18F',
                '#404040',
                '#BAB6B7'
              ],
            },
          ]
        },
        colorDescription: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta consequatur inventore, cupiditate aperiam aliquam accusantium qui totam aliquid odio vero. Quisquam molestias reprehenderit veniam, nesciunt perferendis id itaque incidunt neque."
      },
      highlights: {
        items: [
          {
            itemHeader: {
              svg: 'fa-solid:parking',
              content: 'Parking'
            },
            itemBody: {
              content: 'No Info'
            }
          },
          {
            itemHeader: {
              svg: 'material-symbols:outdoor-garden',
              content: 'Outdoor'
            },
            itemBody: {
              content: 'No Info'
            }
          },
          {
            itemHeader: {
              svg: 'fluent:temperature-24-filled',
              content: 'A/C'
            },
            itemBody: {
              content: 'No'
            }
          },
          {
            itemHeader: {
              svg: 'ic:baseline-electric-bolt',
              content: 'Power'
            },
            itemBody: {
              content: 'Yes'
            }
          },
          {
            itemHeader: {
              svg: 'fluent:bed-16-regular',
              content: 'Beds'
            },
            itemBody: {
              content: '2'
            }
          },
        ]
      },
      comments: {
        ratings: {
          votes: 255,
          items: [
            {
              itemHeader: {
                svg: 'bxs:car',
                content: 'Car is Needed'
              },
              itemBody: {
                color: {
                  strokeColor: '#4a617f',
                  textColor: '#4a617f'
                },
                percent: {
                  value: 100,
                  text: '100%'
                }
              }
            },
            {
              itemHeader: {
                svg: 'material-symbols:directions-walk',
                content: 'There are sidewalks'
              },
              itemBody: {
                color: {
                  strokeColor: '#4a617f',
                  textColor: '#4a617f'
                },
                percent: {
                  value: 75,
                  text: '75%'
                }
              }
            },
            {
              itemHeader: {
                svg: 'cil:animal',
                content: "It's dog friendly"
              },
              itemBody: {
                color: {
                  strokeColor: '#4a617f',
                  textColor: '#4a617f'
                },
                percent: {
                  value: 32,
                  text: '32%'
                }
              }
            },
            {
              itemHeader: {
                svg: 'mdi:mower',
                content: "Yards are well-kept"
              },
              itemBody: {
                color: {
                  strokeColor: '#4a617f',
                  textColor: '#4a617f'
                },
                percent: {
                  value: 67,
                  text: '67%'
                }
              }
            },
            {
              itemHeader: {
                svg: 'mdi:mower',
                content: "Yards are well-kept"
              },
              itemBody: {
                color: {
                  strokeColor: '#4a617f',
                  textColor: '#4a617f'
                },
                percent: {
                  value: 67,
                  text: '67%'
                }
              }
            },
            {
              itemHeader: {
                svg: 'mdi:mower',
                content: "Yards are well-kept"
              },
              itemBody: {
                color: {
                  strokeColor: '#4a617f',
                  textColor: '#4a617f'
                },
                percent: {
                  value: 67,
                  text: '67%'
                }
              }
            },
            {
              itemHeader: {
                svg: 'mdi:mower',
                content: "Yards are well-kept"
              },
              itemBody: {
                color: {
                  strokeColor: '#4a617f',
                  textColor: '#4a617f'
                },
                percent: {
                  value: 67,
                  text: '67%'
                }
              }
            },
          ]
        }
        ,
        content: {
          votes: 100,
          comments: [
            {
              commentHeader: {
                image: require('../images/search-explore/Visitors Comments/1.jpg'),
                author: 'Hamid Hamedani',
                type: 'Resident',
                date: '2y',
                rating: 4
              },
              commentBody: {
                content: 'Commuting anywhere within the perimeter is fairly easy since we’re in the center of the city. I don’t use public transportation, but it is available. Stores and restaurants are fairly walkable.'
              }
            },
            {
              commentHeader: {
                image: require('../images/search-explore/Visitors Comments/2.jpg'),
                author: 'Julia Jackson',
                type: 'Resident',
                date: '1y',
                rating: 7
              },
              commentBody: {
                content: 'Central location and easy highway access make for great easy commuting. In addition, beltline access allows me to not have to drive at all when the weather is nice. '
              }
            },
            {
              commentHeader: {
                image: require('../images/search-explore/Visitors Comments/3.jpg'),
                author: 'Michael Bibi',
                type: 'Resident',
                date: '2y',
                rating: 8
              },
              commentBody: {
                content: 'Walking distance to two dog parks and a lot of neighbors walk their dogs at all times of the day. There are a lot of nearby parks with plenty of poop bags too.'
              }
            },
            {
              commentHeader: {
                image: require('../images/search-explore/Visitors Comments/4.jpg'),
                author: 'Keira Gough',
                type: 'Resident',
                date: '2y',
                rating: 8
              },
              commentBody: {
                content: 'I actually work MARTA (public transportation) and its easily accessible. My drive to work is only about 12-15 minutes. I love living in Old Forth Ward!!'
              }
            },
            {
              commentHeader: {
                image: require('../images/search-explore/Visitors Comments/1.jpg'),
                author: "Finley O'Brien",
                type: 'Resident',
                date: '1y',
                rating: 8
              },
              commentBody: {
                content: 'There are plenty of side walks and the belt line that are both fairly lit at night. The historic Old Fourth Ward Park has an excellent playground and pond with ducks that is a great space for kids to explore.There are plenty of side walks and the belt line that are both fairly lit at night. The historic Old Fourth Ward Park has an excellent playground and pond with ducks that is a great space for kids to explore.  '
              }
            },

          ]
        }
      },
      propertyDetail: {
        informationBody: {
          rows: [
            {
              rowHeader: {
                content: 'Interior Features',
                svg: 'fa6-solid:bed'
              },
              rowBody: {
                items: [
                  {
                    itemHeader: 'Interior Details',
                    itemBody: [
                      'Basement: None',
                      'Number of Rooms: 1',
                      'Types of Rooms: Kitchen'
                    ]
                  },
                  {
                    itemHeader: 'Beds & Baths',
                    itemBody: [
                      'Number of Bedrooms: 3',
                      'Number of Bathrooms: 4',
                      'Number of Bathrooms (full): 3',
                      'Number of Bathrooms (half): 1'
                    ]
                  },
                  {
                    itemHeader: 'Dimensions and Layout',
                    itemBody: [
                      'Living Area: 2075 Square Feet',
                    ]
                  },
                  {
                    itemHeader: 'Appliances & Utilities',
                    itemBody: [
                      'Utilities: Electricity Available, Natural Gas Available, Sewer Available, Water Available',
                      'Appliances: Gas Water Heater, Dryer, Cooktop, Dishwasher, Disposal, Refrigerator',
                      'Dishwasher',
                      'Dryer',
                      'Laundry: In Kitchen',
                      'Refrigerator',
                    ]
                  },
                  {
                    itemHeader: 'Heating & Cooling',
                    itemBody: [
                      'Heating: Natural Gas,Central',
                      'Has Cooling',
                      'Air Conditioning: Electric,Ceiling Fan(s),Central Air,Attic Fan',
                      'Has Heating',
                    ]
                  },
                  {
                    itemHeader: 'Fireplace & Spa',
                    itemBody: [
                      'Number of Fireplaces: 1',
                      'Fireplace: Family Room, Masonry',
                      'Has a Fireplace',
                    ]
                  },
                  {
                    itemHeader: 'Gas & Electric',
                    itemBody: [
                      'Has Gast & Electric on Property',
                    ]
                  },
                  {
                    itemHeader: 'Gas & Electric',
                    itemBody: [
                      'Has Gast & Electric on Property',
                    ]
                  },
                  {
                    itemHeader: 'Windows, Doors, Floors & Walls',
                    itemBody: [
                      'Flooring: Hardwood, Tile',
                      'Common Walls: No Common Walls',
                    ]
                  },
                  {
                    itemHeader: 'Levels, Entrance, & Accessibility',
                    itemBody: [
                      'Levels: Multi/Split',
                      'Floors: Hardwood, Tile',
                    ]
                  },
                  {
                    itemHeader: 'View',
                    itemBody: [
                      'No View',
                    ]
                  },
                  {
                    itemHeader: 'Security',
                    itemBody: [
                      'Security: Carbon Monoxide Detector(s), Smoke Detector(s)',
                    ]
                  },


                ]
              }
            },
            {
              rowHeader: {
                content: 'Exterior Features',
                svg: 'material-symbols:garage-home'
              },
              rowBody: {
                items: [
                  {
                    itemHeader: 'Exterior Home Features',
                    itemBody: [
                      'Roof: Other',
                      'Patio / Porch: Deck',
                      'Exterior: Other'
                    ]
                  },
                  {
                    itemHeader: 'Parking & Garage',
                    itemBody: [
                      'Has a Carport',
                      'No Garage',
                      'No Attached Garage',
                      'Parking Spaces: 3',
                      'Parking: Carport'
                    ]
                  },
                  {
                    itemHeader: 'Frontage',
                    itemBody: [
                      'Waterfront',
                      'Waterfront: Creek',
                      'On Waterfront'
                    ]
                  },
                  {
                    itemHeader: 'Water & Sewer',
                    itemBody: [
                      'Sewer: Public Sewer',
                      'Water Body: Other Lake',
                    ]
                  },
                  {
                    itemHeader: 'Finished Area',
                    itemBody: [
                      'Finished Area (above surface): 2075 Square Feet',
                    ]
                  },


                ]
              }
            },
            {
              rowHeader: {
                content: 'Property Information',
                svg: 'ep:info-filled'
              },
              rowBody: {
                items: [
                  {
                    itemHeader: 'Year Built',
                    itemBody: [
                      'Year Built: 1958',
                    ]
                  },
                  {
                    itemHeader: 'Property Type / Style',
                    itemBody: [
                      'Property Type: Residential',
                      'Property Subtype: Single Family',
                      'Structure Type: Other',
                      'Architecture: Brick 4 Side',
                    ]
                  },
                  {
                    itemHeader: 'Building',
                    itemBody: [
                      'Construction Materials: Brick, Vinyl Siding',
                      'Not a New Construction',
                      'Not Attached Property',
                      'Does Not Include Home Warranty',
                    ]
                  },
                  {
                    itemHeader: 'Property Information',
                    itemBody: [
                      'Condition: Resale',
                      'Parcel Number: 17004100070271',
                    ]
                  },
                ]
              }
            },
            {
              rowHeader: {
                content: 'Price & Status',
                svg: 'ion:pricetags'
              },
              rowBody: {
                items: [
                  {
                    itemHeader: 'Price',
                    itemBody: [
                      'Price Per Sqft: $183',
                    ]
                  },
                  {
                    itemHeader: 'Status Change & Dates',
                    itemBody: [
                      'Possession Timing: Negotiable',
                    ]
                  },
                  {
                    itemHeader: 'Days on Market',
                    itemBody: [
                      'Days on Market: <1 Day on Trulia',
                    ]
                  },
                ]
              }
            },
            {
              rowHeader: {
                content: 'Interior Features',
                svg: 'fa6-solid:bed'
              },
              rowBody: {
                items: [
                  {
                    itemHeader: 'Interior Details',
                    itemBody: [
                      'Basement: None',
                      'Number of Rooms: 1',
                      'Types of Rooms: Kitchen'
                    ]
                  },
                  {
                    itemHeader: 'Beds & Baths',
                    itemBody: [
                      'Number of Bedrooms: 3',
                      'Number of Bathrooms: 4',
                      'Number of Bathrooms (full): 3',
                      'Number of Bathrooms (half): 1'
                    ]
                  },
                  {
                    itemHeader: 'Dimensions and Layout',
                    itemBody: [
                      'Living Area: 2075 Square Feet',
                    ]
                  },
                  {
                    itemHeader: 'Appliances & Utilities',
                    itemBody: [
                      'Utilities: Electricity Available, Natural Gas Available, Sewer Available, Water Available',
                      'Appliances: Gas Water Heater, Dryer, Cooktop, Dishwasher, Disposal, Refrigerator',
                      'Dishwasher',
                      'Dryer',
                      'Laundry: In Kitchen',
                      'Refrigerator',
                    ]
                  },
                  {
                    itemHeader: 'Heating & Cooling',
                    itemBody: [
                      'Heating: Natural Gas,Central',
                      'Has Cooling',
                      'Air Conditioning: Electric,Ceiling Fan(s),Central Air,Attic Fan',
                      'Has Heating',
                    ]
                  },
                  {
                    itemHeader: 'Fireplace & Spa',
                    itemBody: [
                      'Number of Fireplaces: 1',
                      'Fireplace: Family Room, Masonry',
                      'Has a Fireplace',
                    ]
                  },
                  {
                    itemHeader: 'Gas & Electric',
                    itemBody: [
                      'Has Gast & Electric on Property',
                    ]
                  },
                  {
                    itemHeader: 'Gas & Electric',
                    itemBody: [
                      'Has Gast & Electric on Property',
                    ]
                  },
                  {
                    itemHeader: 'Windows, Doors, Floors & Walls',
                    itemBody: [
                      'Flooring: Hardwood, Tile',
                      'Common Walls: No Common Walls',
                    ]
                  },
                  {
                    itemHeader: 'Levels, Entrance, & Accessibility',
                    itemBody: [
                      'Levels: Multi/Split',
                      'Floors: Hardwood, Tile',
                    ]
                  },
                  {
                    itemHeader: 'View',
                    itemBody: [
                      'No View',
                    ]
                  },
                  {
                    itemHeader: 'Security',
                    itemBody: [
                      'Security: Carbon Monoxide Detector(s), Smoke Detector(s)',
                    ]
                  },


                ]
              }
            },
            {
              rowHeader: {
                content: 'Exterior Features',
                svg: 'material-symbols:garage-home'
              },
              rowBody: {
                items: [
                  {
                    itemHeader: 'Exterior Home Features',
                    itemBody: [
                      'Roof: Other',
                      'Patio / Porch: Deck',
                      'Exterior: Other'
                    ]
                  },
                  {
                    itemHeader: 'Parking & Garage',
                    itemBody: [
                      'Has a Carport',
                      'No Garage',
                      'No Attached Garage',
                      'Parking Spaces: 3',
                      'Parking: Carport'
                    ]
                  },
                  {
                    itemHeader: 'Frontage',
                    itemBody: [
                      'Waterfront',
                      'Waterfront: Creek',
                      'On Waterfront'
                    ]
                  },
                  {
                    itemHeader: 'Water & Sewer',
                    itemBody: [
                      'Sewer: Public Sewer',
                      'Water Body: Other Lake',
                    ]
                  },
                  {
                    itemHeader: 'Finished Area',
                    itemBody: [
                      'Finished Area (above surface): 2075 Square Feet',
                    ]
                  },


                ]
              }
            },
            {
              rowHeader: {
                content: 'Property Information',
                svg: 'ep:info-filled'
              },
              rowBody: {
                items: [
                  {
                    itemHeader: 'Year Built',
                    itemBody: [
                      'Year Built: 1958',
                    ]
                  },
                  {
                    itemHeader: 'Property Type / Style',
                    itemBody: [
                      'Property Type: Residential',
                      'Property Subtype: Single Family',
                      'Structure Type: Other',
                      'Architecture: Brick 4 Side',
                    ]
                  },
                  {
                    itemHeader: 'Building',
                    itemBody: [
                      'Construction Materials: Brick, Vinyl Siding',
                      'Not a New Construction',
                      'Not Attached Property',
                      'Does Not Include Home Warranty',
                    ]
                  },
                  {
                    itemHeader: 'Property Information',
                    itemBody: [
                      'Condition: Resale',
                      'Parcel Number: 17004100070271',
                    ]
                  },
                ]
              }
            },
            {
              rowHeader: {
                content: 'Price & Status',
                svg: 'ion:pricetags'
              },
              rowBody: {
                items: [
                  {
                    itemHeader: 'Price',
                    itemBody: [
                      'Price Per Sqft: $183',
                    ]
                  },
                  {
                    itemHeader: 'Status Change & Dates',
                    itemBody: [
                      'Possession Timing: Negotiable',
                    ]
                  },
                  {
                    itemHeader: 'Days on Market',
                    itemBody: [
                      'Days on Market: <1 Day on Trulia',
                    ]
                  },
                ]
              }
            },

          ]
        }
      },
      trendsAndAssessment: {
        trends: {
          byValue: {
            typical: '275,861',
            actual: '389,000',
            percent: {
              text: 'above',
              value: 70
            }
          },
          bySqft: {
            typical: '220',
            actual: '200',
            percent: {
              text: 'below',
              value: 30
            }
          },
          chart: {
            labels: ['January', 'February', 'March', 'April'],
            datasets: [
              {
                label: 'Typical',
                data: [275861, 265000, 285861, 305861],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
              },
              {
                label: 'This Property',
                data: [305861, 305011, 290000, 250000],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
              },
            ],
          }
        },
        priceDifference: {
          headerText: 'for Last 4 Months',
          chartData: {
            labels: ['January', 'February', 'March', 'April'],
            datasets: [
              {
                label: 'Typical',
                data: [275861, 265000, 285861, 305861],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
              },
              {
                label: 'This Property',
                data: [305861, 305011, 290000, 250000],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
              },
            ],
          }
        },
        assessments: {
          year: '2022',
          tax: '$1,051',
          assessment: '$469,560',
          description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam repellat animi amet suscipit deserunt soluta accusamus fugit illo cum. Quasi error repellendus tempore laboriosam, sint omnis modi aliquid? Voluptas, atque!'
        },
        priceHistory: {
          items: [
            {
              event: 'Listed For Sale',
              date: '05/12/2022',
              source: 'GAMLS #20038753',
              price: '860,900'
            },
            {
              event: 'Listing Removed	',
              date: '07/10/2021	',
              source: 'GAMLS #8993121',
              price: '550,000'
            },

          ]
        }
      },
      priceHistroy: {
        data: {
          labels: ['Januray', 'July', 'Febrary', 'August', 'March', 'September', 'Aprill', 'October', 'May', 'November', 'June', 'December'],
          datasets: [
            {
              label: 'Yearly',
              data: [5110, 4900, 4500, 3000, 2000, 1000, 500],
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
              label: 'Monthly',
              data: [4500, 4330, 4500, 3000, 2000, 1000, 500],
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            },
            {
              label: 'Weekly',
              data: [5110, 4900, 4500, 3000, 2000, 1000, 500],
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
          ],
        }
      },
      propertyProvider: {
        id: '#tqtqetqet',
        name: 'REAL ESTATE',
        logo: require('../images/search-explore/Providers/1.png'),
        description: "Listings identified with the FMLS IDX logo come from FMLS and are held by brokerage firms other than the owner of this website. The listing brokerage is identified in any listing details. Information is deemed reliable but is not guaranteed",
        socialNetwork: {
          items: [
            {
              svg: 'fa-brands:facebook-square',
              link: ''
            },
            {
              svg: 'ri:whatsapp-fill',
              link: ''
            },
            {
              svg: 'akar-icons:instagram-fill',
              link: ''
            }
          ]
        },
        popularProperties: {
          items: [
            {
              info: {
                cardName: '1735 Donnalee Ave SE,',
                cardAddress: 'Atlanta, GA 30316',
                cardPrice: '1,555,000',
              },
              facilities: {
                items: [
                  {
                    svg: 'fluent:bed-24-regular',
                    content: 'Bed',
                    count: '3'
                  },
                  {
                    svg: 'cil:bath',
                    content: 'Bed',
                    count: '2'
                  },
                  {
                    svg: 'bxs:parking',
                    content: 'Bed',
                    count: '4'
                  },
                  {
                    svg: 'bx:area',
                    content: 'Bed',
                    count: '1,650 SQFT'
                  }
                ]
              },
              image: {
                big: require('../images/search-explore/Card 1/1.jpg'),
              }
            },
            {
              info: {
                cardName: '99 Chestnut Hill Ave',
                cardAddress: 'Brighton, MA 02135',
                cardPrice: '420,000',
              },
              facilities: {
                items: [
                  {
                    svg: 'fluent:bed-24-regular',
                    content: 'Bed',
                    count: '3'
                  },
                  {
                    svg: 'cil:bath',
                    content: 'Bed',
                    count: '2'
                  },
                  {
                    svg: 'bxs:parking',
                    content: 'Bed',
                    count: '4'
                  },
                  {
                    svg: 'bx:area',
                    content: 'Bed',
                    count: '1,650 SQFT'
                  }
                ]
              },
              image: {
                big: require('../images/search-explore/Card 2/1.jpg'),
              }
            },
            {
              info: {
                cardName: '733 Martin St SE',
                cardAddress: 'Atlanta, GA 30315',
                cardPrice: '400,000',
              },
              facilities: {
                items: [
                  {
                    svg: 'fluent:bed-24-regular',
                    content: 'Bed',
                    count: '3'
                  },
                  {
                    svg: 'cil:bath',
                    content: 'Bed',
                    count: '2'
                  },
                  {
                    svg: 'bxs:parking',
                    content: 'Bed',
                    count: '4'
                  },
                  {
                    svg: 'bx:area',
                    content: 'Bed',
                    count: '1,650 SQFT'
                  }
                ]
              },
              image: {
                big: require('../images/search-explore/Card 3/1.jpg'),
              }
            },
            {
              info: {
                cardName: '732 Fox Lane Dr',
                cardAddress: 'Atlanta, GA 30349',
                cardPrice: '441,346',
              },
              facilities: {
                items: [
                  {
                    svg: 'fluent:bed-24-regular',
                    content: 'Bed',
                    count: '1'
                  },
                  {
                    svg: 'cil:bath',
                    content: 'Bed',
                    count: '1'
                  },
                  {
                    svg: 'bxs:parking',
                    content: 'Bed',
                    count: '1'
                  },
                  {
                    svg: 'bx:area',
                    content: 'Bed',
                    count: '1,150 SQFT'
                  }
                ]
              },
              image: {
                big: require('../images/search-explore/Card 4/1.jpg'),
              }
            },
            {
              info: {
                cardName: '534 Rockwell St SW',
                cardAddress: 'Atlanta, GA 30310',
                cardPrice: '$399,999',
              },
              facilities: {
                items: [
                  {
                    svg: 'fluent:bed-24-regular',
                    content: 'Bed',
                    count: '1'
                  },
                  {
                    svg: 'cil:bath',
                    content: 'Bed',
                    count: '1'
                  },
                  {
                    svg: 'bxs:parking',
                    content: 'Bed',
                    count: '1'
                  },
                  {
                    svg: 'bx:area',
                    content: 'Bed',
                    count: '1,150 SQFT'
                  }
                ]
              },
              image: {
                big: require('../images/search-explore/Card 5/1.jpg'),
              }
            },
          ]
        },
        recentProperties: {
          items: [
            {
              info: {
                cardName: '1735 Donnalee Ave SE,',
                cardAddress: 'Atlanta, GA 30316',
                cardPrice: '420,000',
              },
              facilities: {
                items: [
                  {
                    svg: 'fluent:bed-24-regular',
                    content: 'Bed',
                    count: '3'
                  },
                  {
                    svg: 'cil:bath',
                    content: 'Bed',
                    count: '2'
                  },
                  {
                    svg: 'bxs:parking',
                    content: 'Bed',
                    count: '4'
                  },
                  {
                    svg: 'bx:area',
                    content: 'Bed',
                    count: '1,650 SQFT'
                  }
                ]
              },
              image: {
                big: require('../images/search-explore/Card 1/1.jpg'),
              }
            },
            {
              info: {
                cardName: '99 Chestnut Hill Ave',
                cardAddress: 'Brighton, MA 02135',
                cardPrice: '420,000',
              },
              facilities: {
                items: [
                  {
                    svg: 'fluent:bed-24-regular',
                    content: 'Bed',
                    count: '3'
                  },
                  {
                    svg: 'cil:bath',
                    content: 'Bed',
                    count: '2'
                  },
                  {
                    svg: 'bxs:parking',
                    content: 'Bed',
                    count: '4'
                  },
                  {
                    svg: 'bx:area',
                    content: 'Bed',
                    count: '1,650 SQFT'
                  }
                ]
              },
              image: {
                big: require('../images/search-explore/Card 2/1.jpg'),
              }
            },
            {
              info: {
                cardName: '733 Martin St SE',
                cardAddress: 'Atlanta, GA 30315',
                cardPrice: '400,000',
              },
              facilities: {
                items: [
                  {
                    svg: 'fluent:bed-24-regular',
                    content: 'Bed',
                    count: '3'
                  },
                  {
                    svg: 'cil:bath',
                    content: 'Bed',
                    count: '2'
                  },
                  {
                    svg: 'bxs:parking',
                    content: 'Bed',
                    count: '4'
                  },
                  {
                    svg: 'bx:area',
                    content: 'Bed',
                    count: '1,650 SQFT'
                  }
                ]
              },
              image: {
                big: require('../images/search-explore/Card 3/1.jpg'),
              }
            },
            {
              info: {
                cardName: '732 Fox Lane Dr',
                cardAddress: 'Atlanta, GA 30349',
                cardPrice: '441,346',
              },
              facilities: {
                items: [
                  {
                    svg: 'fluent:bed-24-regular',
                    content: 'Bed',
                    count: '1'
                  },
                  {
                    svg: 'cil:bath',
                    content: 'Bed',
                    count: '1'
                  },
                  {
                    svg: 'bxs:parking',
                    content: 'Bed',
                    count: '1'
                  },
                  {
                    svg: 'bx:area',
                    content: 'Bed',
                    count: '1,150 SQFT'
                  }
                ]
              },
              image: {
                big: require('../images/search-explore/Card 4/1.jpg'),
              }
            },
            {
              info: {
                cardName: '534 Rockwell St SW',
                cardAddress: 'Atlanta, GA 30310',
                cardPrice: '$399,999',
              },
              facilities: {
                items: [
                  {
                    svg: 'fluent:bed-24-regular',
                    content: 'Bed',
                    count: '1'
                  },
                  {
                    svg: 'cil:bath',
                    content: 'Bed',
                    count: '1'
                  },
                  {
                    svg: 'bxs:parking',
                    content: 'Bed',
                    count: '1'
                  },
                  {
                    svg: 'bx:area',
                    content: 'Bed',
                    count: '1,150 SQFT'
                  }
                ]
              },
              image: {
                big: require('../images/search-explore/Card 5/1.jpg'),
              }
            },
          ]
        },
      },
      arrangeViewing: {
        background: require('../images/search-explore/Arrange Viewing/1.jpg'),
        dateLimit: {
          min: '2022-05-06',
          max: '2022-06-06',
          warning: 'Visiting Date can be between tomorrow and another 30 days'
        },
        timeLimit: {
          options: [
            '1:30 PM',
            '2:00 PM',
            '2:30 PM',
            '3:00 PM',
            '3:30 PM',
            '4:00 PM',
            '4:30 PM',
            '5:00 PM',
            '5:30 PM',
            '6:00 PM',
            '6:30 PM',
            '7:00 PM',
            '7:30 PM',
            '8:00 PM',
            '8:30 PM',
            '9:00 PM',
            '9:30 PM',
            '10:00 PM',
          ],
          message: 'Visiting hours can be from 8 am to 10 pm'
        },

      }
    },



  ]


  return (
    <section className="search-explore">
      <div className="section-header">
        <h1>
          <span>Search</span>
          &
          <span>Explore</span>
        </h1>
      </div>
      <div className="section-body">
        {
          searchExploreCards.map(card => {
            return (
              <SearchAndExploreCard card={card} key={Math.random(255)} />
            )
          })
        }

      </div>
    </section>
  )

  
}

export default SearchAndExplore
