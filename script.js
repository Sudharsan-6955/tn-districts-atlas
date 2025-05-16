const districts = [
  {
    name: "Ariyalur",
    image: "Ariyalur/ariyalurrr.jpg",
    places: [
      {
        name: "Gangaikonda Cholapuram",
        image: "Ariyalur/Gangaikonda Cholapuram (2).jpg",
        description: "Gangaikonda Cholapuram is an ancient city known for its grand Chola architecture and the famous Gangaikonda Cholapuram temple."

      },
      {
        name: "Karaivetti Bird Sanctuary",
        image: "Ariyalur/Karaivetti Bird Sanctuary.jpg",
        description: "Karaivetti Bird Sanctuary is a haven for birdwatchers, home to various migratory and resident bird species, making it a perfect spot for nature enthusiasts."

      },
    ]
  },
  {
    name: "Chengalpattu",
    image: "Chengalpattu/Mahabalipuram.jpg",
    places: [
      {
        name: "Mahabalipuram",
        image: "Chengalpattu/Mahabalipuram 2.jpg",
        description: "Mahabalipuram, a UNESCO World Heritage Site, is famous for its rock-cut temples and stunning shore temples, showcasing the artistry of ancient South Indian architecture."

      },
      {
        name: "Mahabalipuram",
        image: "Chengalpattu/Mahabalipuram.jpg",
        description: "Mahabalipuram is a coastal town known for its ancient rock-cut temples and sculptures, including the famous Shore Temple and Arjuna's Penance."

      },
      {
        name: "Muttukadu Backwaters",
        image: "Chengalpattu/Muttukadu Backwaters.jpg",
        description: " Muttukadu Backwaters is a serene water body near Chennai, offering boating and water sports amidst picturesque surroundings, making it a popular weekend getaway."

      },
      {
        name: "vedanthangal",
        image: "Chengalpattu/vedanthangal 2.jpg",
        description: "Vedanthangal Bird Sanctuary is one of the oldest bird sanctuaries in India, known for its diverse avian population and scenic beauty, attracting birdwatchers and nature lovers alike."

      },
      {
        name: "Vedanthangal Bird Sanctuary",
        image: "Chengalpattu/Vedanthangal Bird Sanctuary.jpg",
        description: "Vedanthangal Bird Sanctuary is a haven for migratory birds, especially during the winter months, making it a paradise for birdwatchers and nature enthusiasts."

      },
    ]
  },
  {
    name: "Chennai",
    image: "Chennai/Chennai.jpg",
    places: [
      {
        name: "Fort St. George",
        image: "Chennai/Fort St. George.jpg",
        description: "Fort St. George is a historic fort built by the British East India Company in 1644, now housing the Tamil Nadu Legislative Assembly and a museum showcasing colonial artifacts."

      },
      {
        name: "Kapaleeshwarar Temple",
        image: "Chennai/Kapaleeshwarar Temple.jpg",
        description: "Kapaleeshwarar Temple is a famous Hindu temple dedicated to Lord Shiva, known for its stunning Dravidian architecture and vibrant festivals, attracting devotees and tourists alike."
      },
      {
        name: "Marina Beach",
        image: "Chennai/Marina Beach.jpg",
        description: "Marina Beach is one of the longest urban beaches in the world, stretching along the Bay of Bengal, offering a vibrant atmosphere with food stalls, activities, and stunning sunrise views."
      },
    ]
  },
  {
    name: "Coimbatore",
    image: "Coimbatore/Coimbatore.jpg",
    places: [
      {
        name: "Isha Yoga Center",
        image: "Coimbatore/Isha Yoga Center.jpg",
        description: "Isha Yoga Center is a renowned spiritual center founded by Sadhguru Jaggi Vasudev, offering yoga programs, meditation, and the iconic Dhyanalinga and Linga Bhairavi shrines amidst serene surroundings."
      },
      {
        name: "Marudamalai Temple",
        image: "Coimbatore/Marudamalai Temple.jpg",
        description: "Marudamalai Temple is a famous hill temple dedicated to Lord Murugan, located on the Marudamalai Hill, offering panoramic views of Coimbatore and attracting devotees and tourists alike."
      },
      {
        name: "Siruvani Waterfalls",
        image: "Coimbatore/Siruvani Waterfalls.jpg",
        description: "Siruvani Waterfalls is a picturesque waterfall located in the Western Ghats, known for its crystal-clear water and lush greenery, making it a popular spot for nature lovers and trekkers."
      },
    ]
  },
  {
    name: "Cuddalore",
    image: "Cuddalore/cuddalore.jpg",
    places: [
      {
        name: "Padaleeswarar Temple",
        image: "Cuddalore/Padaleeswarar Temple.jpg",
        description: "Padaleeswarar Temple is a historic Hindu temple dedicated to Lord Shiva, known for its intricate architecture and spiritual significance, attracting devotees and tourists alike."
      },
      {
        name: "Pichavaram Mangrove Forest",
        image: "Cuddalore/Pichavaram Mangrove Forest.jpg",
        description: "Pichavaram Mangrove Forest is one of the largest mangrove forests in India, offering a unique ecosystem with rich biodiversity, boating opportunities, and stunning views of the backwaters."
      },
      {
        name: "Silver Beach",
        image: "Cuddalore/Silver Beach.jpg",
        description: "Silver Beach is a serene and less crowded beach located near Cuddalore, known for its golden sands, clear waters, and tranquil atmosphere, making it a perfect spot for relaxation and leisure."
      },
    ]
  },
  {
    name: "Dharmapuri",
    image: "Dharmapuri/தர்மபுரி.jpg",
    places: [
      {
        name: "Hogenakkal Falls dharmapuri",
        image: "Dharmapuri/Hogenakkal Falls dharmapuri.jpg",
        description: "Hogenakkal Falls is a stunning waterfall located on the Kaveri River, known for its scenic beauty and therapeutic waters, making it a popular tourist destination for nature lovers."
      },
      {
        name: "Subramanya Siva Memorial",
        image: "Dharmapuri/Subramanya Siva Memorial.jpg",
        description: "Subramanya Siva Memorial is a tribute to the renowned Tamil poet and revolutionary Subramanya Siva, showcasing his life and contributions to Tamil literature and freedom struggle."
      },
      {
        name: "Theerthamalai Temple",
        image: "Dharmapuri/Theerthamalai Temple.jpg",
        description: "Theerthamalai Temple is a revered Hindu temple dedicated to Lord Shiva, located on a hilltop, offering panoramic views and a serene atmosphere for devotees and pilgrims."
      },
    ]
  },
  {
    name: "Dindigul",
    image: "Dindigul/Dindukal.jpg",
    places: [
      {
        name: "Dindigul Fort",
        image: "Dindigul/Dindigul Fort.jpg",
        description: "Dindigul Fort is a historic fort built by the Nayaks, offering panoramic views of the surrounding landscape and showcasing ancient architecture and history."
      },
      {
        name: "Kodaikanal",
        image: "Dindigul/Kodaikanal.jpg",
        description: "Kodaikanal is a popular hill station known for its scenic beauty, pleasant climate, and attractions like Kodaikanal Lake, Coaker's Walk, and Bryant Park, making it a perfect getaway."
      },
      {
        name: "Sirumalai",
        image: "Dindigul/Sirumalai.jpg",
        description: "Sirumalai is a serene hill station near Dindigul, known for its lush greenery, pleasant climate, and trekking opportunities, making it a popular destination for nature lovers."
      }
    ]
  },
  {
    name: "Erode",
    image: "Erode/ERODE.jpg",
    places: [
      {
        name: "Bhavani Sangameshwarar Temple",
        image: "Erode/Bhavani Sangameshwarar Temple.jpg",
        description: "Bhavani Sangameshwarar Temple is a revered Hindu temple located at the confluence of rivers Bhavani and Kaveri, known for its spiritual significance and beautiful architecture."
      },
      {
        name: "Chennimalai Murugan Temple",
        image: "Erode/Chennimalai Murugan Temple.jpg",
        description: "Chennimalai Murugan Temple is a famous hill temple dedicated to Lord Murugan, located on Chennimalai Hill, offering panoramic views and attracting devotees and tourists alike."
      },
      {
        name: "Kodiveri Dam",
        image: "Erode/Kodiveri Dam.jpg",
        description: "Kodiveri Dam is a picturesque dam located on the Bhavani River, known for its scenic beauty and recreational activities like boating, making it a popular picnic spot."
      }
    ]
  },
  {
    name: "Kallakurichi",
    image: "Kallakurichi/கள்ளக்குறிச்சி.jpg",
    places: [
      {
        name: "Gomukhi Dam",
        image: "Kallakurichi/Gomukhi Dam.jpg",
        description: "Gomukhi Dam is a scenic dam located in Kallakurichi, known for its picturesque surroundings and recreational activities, making it a popular spot for nature lovers and picnickers."
      },
      {
        name: "Kalvarayan Hills",
        image: "Kallakurichi/Kalvarayan Hills.jpg",
        description: "Kalvarayan Hills is a beautiful hill range in Kallakurichi, known for its lush greenery, pleasant climate, and trekking opportunities, making it a popular destination for nature enthusiasts."
      },
      {
        name: "Veeratteswarar Temple",
        image: "Kallakurichi/Veeratteswarar Temple.jpg",
        description: "Veeratteswarar Temple is a historic Hindu temple dedicated to Lord Shiva, known for its intricate architecture and spiritual significance, attracting devotees and tourists alike."
      }
    ]
  },
  {
    name: "Kanchipuram",
    image: "Kanchipuram/kanchipuram.jpg",
    places: [
      {
        name: "Ekambareswarar Temple",
        image: "Kanchipuram/Ekambareswarar Temple.jpg",
        description: "One of Panchabootha Sthalams, represents Earth. Known for sacred mango tree and grand annual car festivals"
      },
      {
        name: "Kamakshi Amman Temple",
        image: "Kanchipuram/Kamakshi Amman Temple.jpg",
        description: "Goddess Kamakshi’s abode, known for golden chariot, spiritual significance, and devotion of Shankaracharya."
      },
      {
        name: "Kanchipuram Sarees",
        image: "Kanchipuram/Kanchipuram Sarees.jpg",
        description: "World-renowned handwoven silk sarees, known for rich colors, zari work, and traditional craftsmanship."
      }
    ]
  },
  {
    name: "Kanyakumari",
    image: "Kanyakumari/கன்னியாகுமரி.jpg",
    places: [
      {
        name: "Sunrise and Sunset Views",
        image: "Kanyakumari/Sunrise and Sunset Views.jpg",
        description: "Kanyakumari is famous for its breathtaking sunrise and sunset views over the confluence of the Arabian Sea, Bay of Bengal, and Indian Ocean, attracting tourists and photographers alike."},
      {
        name: "Thiruvalluvar Statue",
        image: "Kanyakumari/Thiruvalluvar Statue.jpg",
        description: "The Thiruvalluvar Statue is a monumental statue of the Tamil poet and philosopher Thiruvalluvar, located on a small island off the coast of Kanyakumari, symbolizing Tamil culture and literature."
      },
      {
        name: "Vivekananda rock memorial…",
        image: "Kanyakumari/Vivekananda rock memorial….jpg",
        description: "Vivekananda Rock Memorial is a famous monument dedicated to Swami Vivekananda, located on a rock island in Kanyakumari, commemorating his visit and teachings, attracting pilgrims and tourists."
      }
    ]
  },
  {
    name: "Thiruvallur",
    image: "Thiruvallur/Thiruvallur.jpg",
    places: [
      {
        name: "Poondi Reservoir",
        image: "Thiruvallur/Poondi Reservoir.jpg",
        description: "Poondi Reservoir is a major water supply source for Chennai, surrounded by scenic hills and greenery, making it a popular spot for picnics and nature walks."
      },
      {
        name: "Pulicat Lake",
        image: "Thiruvallur/Pulicat Lake.jpg",
        description: "Pulicat Lake is a large brackish water lagoon located on the Coromandel Coast, known for its rich biodiversity, birdwatching opportunities, and scenic beauty, making it a popular eco-tourism destination."
      },
      {
        name: "Veera ragava perumal",
        image: "Thiruvallur/veera ragava perumal.jpg",
        description: "Veera Ragava Perumal Temple is a famous Hindu temple dedicated to Lord Vishnu, known for its intricate architecture and spiritual significance, attracting devotees and tourists alike."
      }
    ]
  },
  {
    name: "Karur",
    image: "Karur/கரூர்.jpg",
    places: [
      {
        name: "Kalyana Venkattaramasami Temple",
        image: "Karur/Kalyana Venkattaramasami Temple.jpg",
        description:"Pasupathieswarar Temple Ancient Shiva temple known for architectural beauty and spiritual importance"
        
      },
      {
        name: "Mayanur Dam",
        image: "Karur/Mayanur Dam.jpg",
        description: "Kalyana Venkattaramasami Temple Famous temple attracting devotees with its festivals and rituals."
      },
      {
        name: "Pasupathieswarar Temple",
        image: "Karur/Pasupathieswarar Temple.jpg",
        description: "Mayanur Dam Popular picnic spot near Karur, surrounded by lush greenery."
      }
    ]
  },
  {
    name: "Krishnagiri",
    image: "Krishnagiri/கிருஷ்ணகிரி.jpg",
    places: [
      {
        name: "Krishnagiri Dam",
        image: "Krishnagiri/Krishnagiri Dam.jpg",
        description: "A serene spot built across the Thenpennai River, offering picturesque views and fishing opportunities. It’s a popular picnic and nature retreat."
      },
      {
        name: "KRP Dam",
        image: "Krishnagiri/KRP Dam.jpg",
        description: "A multipurpose dam surrounded by lush greenery, ideal for fishing, boating, and picnics. It supports irrigation and local agriculture."
      },
      {
        name: "Shree Parshwa Padmavathi Shaktipeet Tirth Dham",
        image: "Krishnagiri/Shree Parshwa Padmavathi Shaktipeet Tirth Dham.jpg",
        description: "A famous Jain pilgrimage site known for its spiritual ambiance and beautiful temple architecture. Devotees visit for peace and religious rituals."
      }
    ]
  },
  {
    name: "Madurai",
    image: "Madurai/Madurai (1).jpg",
    places: [
      {
        name: "Gandhi Museum madurai",
        image: "Madurai/Gandhi Museum madurai.jpg",
        description:"Showcases artifacts related to Mahatma Gandhi and India’s independence struggle. It’s a must-visit for history enthusiasts and patriots."
      },
      {
        name: "Madurai Kallazhagar",
        image: "Madurai/Madurai Kallazhagar.jpg",
        description:"A beautiful Vishnu temple located near Madurai, famous for the annual Chithirai Festival where the deity crosses the Vaigai River. It blends spiritual significance with vibrant local traditions."
      },
      {
        name: "Meenakshi Amman Temple ",
        image: "Madurai/Meenakshi Amman Temple - Madurai.jpg",
        description:"A stunning Dravidian-style temple dedicated to Goddess Meenakshi and Lord Sundareswarar, renowned for its intricate carvings and vibrant festivals."
      },
      {
        name: "Thirumalai Nayakkar Mahal Palace Madurai…",
        image: "Madurai/Thirumalai Nayakkar Mahal Palace Madurai….jpg",
        description:"A majestic 17th-century palace blending Dravidian and Islamic architecture. It’s famous for its grand pillars, frescoes, and royal history."
      }
    ]
  },
  {
    name: "Mayiladuthurai",
    image: "Mayiladuthurai/mayiladudurai.jpg",
    places: [
      {
        name: "Mayuranathaswami Temple",
        image: "Mayiladuthurai/Mayuranathaswami Temple.jpg",
        description:"An ancient Shiva temple known for its exquisite Dravidian architecture and vibrant festivals. The temple is a spiritual center attracting devotees year-round."
      },
      {
        name: "Navagraha Temples",
        image: "Mayiladuthurai/Navagraha Temples.jpg",
        description:"A cluster of nine temples each dedicated to one of the nine celestial planets, believed to influence human destiny and well-being."
      },
      {
        name: "Tharangambadi",
        image: "Mayiladuthurai/Tharangambadi.jpg",
        description:"A historic Danish settlement by the sea with a famous fort, colonial architecture, and rich maritime history, offering scenic coastal views."
      }
    ]
  },
  {
    name: "Nagapattinam",
    image: "Nagapattinam/nagapattinam.jpg",
    places: [
      {
        name: "Nagore Dargah",
        image: "Nagapattinam/Nagore Dargah.jpg",
        description:"A revered Muslim shrine known for its harmonious religious gatherings and beautiful Indo-Islamic architecture, drawing devotees from various faiths."
      },
      {
        name: "Point Calimere Wildlife Sanctuary",
        image: "Nagapattinam/Point Calimere Wildlife Sanctuary.jpg",
        description:"A protected area rich in biodiversity, famous for migratory birds, salt pans, and rare species like the blackbuck and deer."
      },
      {
        name: "Velankanni Church",
        image: "Nagapattinam/Velankanni Church.jpg",
        description:"A famous Roman Catholic basilica dedicated to Our Lady of Good Health, attracting pilgrims worldwide for its miracles and annual festival."
      }
    ]
  },
  {
    name: "Namakkal",
    image: "Namakkal/நாமக்கல்.jpg",
    places: [
      {
        name: "Kolli Hills",
        image: "Namakkal/Kolli Hills.jpg",
        description:"A scenic hill range with waterfalls, temples, and trekking trails, known for its natural beauty and traditional herbal medicine."
      },
      {
        name: "Namakkal fort",
        image: "Namakkal/Namakkal fort.jpg",
        description:"An ancient hill fort offering panoramic views of the town, famous for its strategic importance during regional wars."
      },
      {
        name: "Sri Namakkal Anjaneya Temple",
        image: "Namakkal/Sri Namakkal Anjaneya Temple in Tamil Nadu.jpg",
        description:"A historic temple dedicated to Lord Hanuman, known for its huge granite idol and vibrant religious festivals."
      }
    ]
  },
  {
    name: "Nilgiris",
    image: "Nilgiris/nilagiri.jpg",
    places: [
      {
        name: "Botanical Gardens",
        image: "Nilgiris/Botanical Gardens.jpg",
        description:"Established in 1847, these gardens showcase a variety of exotic plants, flowers, and trees, perfect for nature lovers and photographers."
      },
      {
        name: "Nilgiri Mountain Railway",
        image: "Nilgiris/Nilgiri Mountain Railway.jpg",
        description:"A UNESCO World Heritage site, this toy train offers a charming ride through lush hills and picturesque landscapes."
      },
      {
        name: "Ooty",
        image: "Nilgiris/Ooty.jpg",
        description:"A popular hill station known for its pleasant climate, botanical gardens, and scenic tea plantations. Often called the 'Queen of Hill Stations.'"
      }
    ]
  },
  {
    name: "Perambalur",
    image: "Perambalur/perambalur.jpg",
    places: [
      {
        name: "Ranjankudi Fort",
        image: "Perambalur/Ranjankudi Fort.jpg",
        description:"A historic fort known for its architectural blend of Hindu and Muslim styles. It played a key role in regional battles."
      },
      {
        name: "Sathanur Dam",
        image: "Perambalur/Sathanur Dam.jpg",
        description:"A popular spot for picnics and sightseeing, surrounded by beautiful hills and serene water reservoirs."
      },
      {
        name: "Siruvachur Madurakali Temple",
        image: "Perambalur/Siruvachur Madurakali Temple.jpg",
        description:"Famous for its unique worship of goddess Madurakali, attracting devotees especially during annual festivals."
      }
    ]
  },
  {
    name: "Pudukkottai",
    image: "Pudukkottai/pudukottai.jpg",
    places: [
      {
        name: "Avudaiyarkoil Temple",
        image: "Pudukkottai/Avudaiyarkoil Temple.jpg",
        description:"A unique Shiva temple famous for its intricate carvings and the rare form of worship without idols."
      },
      {
        name: "Sittanavasal Cave",
        image: "Pudukkottai/Sittanavasal Cave.jpg",
        description:"Ancient Jain cave paintings dating back to the 7th century, showcasing beautiful frescoes and rock-cut architecture."
      },
      {
        name: "Thirumayam Fort",
        image: "Pudukkottai/Thirumayam Fort.jpg",
        description:"A historic fort built by the local chieftain, offering panoramic views and ancient temples within its premises."
      }
    ]
  },
  {
    name: "Ramanathapuram",
    image: "Ramanathapuram/இராமநாதபுரம்.jpg",
    places: [
      {
        name: "Dhanushkodi",
        image: "Ramanathapuram/Dhanushkodi.jpg",
        description:"A ghost town with serene beaches and ruins, destroyed by a cyclone in 1964, attracting curious travelers."
      },
      {
        name: "Pamban Bridge",
        image: "Ramanathapuram/Pamban Bridge.jpg",
        description:"An engineering marvel connecting Rameswaram to mainland India, offering scenic views of the sea."
      },
      {
        name: "Ramanathaswamy Temple",
        image: "Ramanathapuram/Ramanathaswamy Temple.jpg",
        description:"A renowned Hindu temple on Rameswaram island, famous for its long corridors and sacred water tanks."
      }
    ]
  },
  {
    name: "Ranipet",
    image: "Ranipet/RANIPET.jpg",
    places: [
      {
        name: "Jalakandeswarar Temple",
        image: "Ranipet/Jalakandeswarar Temple.jpg",
        description:"A historic temple dedicated to Lord Shiva, known for its intricate carvings and serene atmosphere."
      },
      {
        name: "Yelagiri Hills",
        image: "Ranipet/Yelagiri Hills.jpg",
        description:"A beautiful hill station offering trekking, nature walks, and panoramic views, perfect for weekend getaways."
      },
    ]
  },
  {
    name: "Salem",
    image: "Salem/Salem.jpg",
    places: [
      {
        name: "1008 Lingam Temple",
        image: "Salem/1008 Lingam Temple.jpg",
        description:"An ancient temple complex featuring a thousand Shiva lingams, attracting devotees and architecture enthusiasts alike."

      },
      {
        name: "Kiliyur Falls Yercaud",
        image: "Salem/Kiliyur Falls Yercaud.jpg",
        description:"A stunning waterfall nestled within the Shevaroy Hills, surrounded by lush greenery and ideal for nature walks."
      },
      {
        name: "Yercaud",
        image: "Salem/Yercaud.jpg",
        description:"A peaceful hill station known for its coffee plantations, pleasant climate, and scenic viewpoints like the Lady’s Seat."
      }
    ]
  },
  {
    name: "Sivagangai",
    image: "Sivagangai/sivagangai.jpg",
    places: [
      {
        name: "Chettinad Palace",
        image: "Sivagangai/Chettinad Palace.jpg",
        description:"A grand mansion showcasing the rich heritage of the Chettinad region, famous for its architecture and antiques."
      },
      {
        name: "Kundrakudi Murugan Temple",
        image: "Sivagangai/Kundrakudi Murugan Temple.jpg",
        description:"A revered hill temple dedicated to Lord Murugan, offering panoramic views and spiritual ambiance."
      },
      {
        name: "Pillayarpatti Vinayagar Temple",
        image: "Sivagangai/Pillayarpatti Vinayagar Temple.jpg",
        description:"An ancient temple known for its unique rock-cut Ganesha idol, attracting devotees year-round."
      }
    ]
  },
  {
    name: "Tenkasi",
    image: "Tenkasi/tenkasi.jpg",
    places: [
      {
        name: "Courtallam Falls",
        image: "Tenkasi/Courtallam Falls (2).jpg",
        description:"Known as the 'Spa of South', India Courtallam Falls offers refreshing natural waterfalls surrounded by lush forests."
      },
      {
        name: "Kasi Viswanathar Temple",
        image: "Tenkasi/Kasi Viswanathar Temple.jpg",
        description:"An ancient temple dedicated to Lord Shiva, famous for its stunning Dravidian architecture and religious significance."
      },
      {
        name: "Papanasam Dam",
        image: "Tenkasi/Papanasam Dam.jpg",
        description:"A scenic dam near Papanasam town, ideal for picnics and nature lovers, surrounded by hills and greenery."
      }
    ]
  },
  {
    name: "Thanjavur",
    image: "Thanjavur/thanjavur.jpg",
    places: [
      {
        name: "Brihadeeswarar Temple",
        image: "Thanjavur/Brihadeeswarar Temple.jpg",
        description:"A UNESCO World Heritage Site, this grand temple built by Raja Raja Chola I showcases magnificent Chola architecture and art."
      },
      {
        name: "Maratha Palace_Thanjavur",
        image: "Thanjavur/Maratha Palace_Thanjavur.jpg",
        description:"A historic palace complex featuring a museum with royal artifacts, paintings, and classic architecture from the Maratha period."
      },
      {
        name: "Thanjavur Paintings",
        image: "Thanjavur/Thanjavur Paintings.jpg",
        description:"Traditional Tanjore paintings are renowned for their rich colors, gold leaf work, and intricate craftsmanship rooted in South Indian culture."
      }
    ]
  },
  {
    name: "Theni",
    image: "Theni/theni.jpg",
    places: [
      {
        name: "Meghamalai",
        image: "Theni/Meghamalai.jpg",
        description:"Known as the 'High Wavy Mountains,'' Meghamalai offers scenic tea estates, rich biodiversity, and peaceful trekking trails amid misty hills."
      },
      {
        name: "Suruli Falls",
        image: "Theni/Suruli Falls.jpg",
        description:"A beautiful waterfall cascading down in multiple steps, surrounded by lush forests, ideal for nature lovers and picnickers."
      },
      {
        name: "Vaigai Dam",
        image: "Theni/Vaigai Dam.jpg",
        description:"An important irrigation dam on the Vaigai River, offering picturesque views and a popular spot for family outings and boat rides."
      }
    ]
  },
  {
    name: "Thoothukudi",
    image: "Thoothukudi/thoothukudi.jpg",
    places: [
      {
        name: "Kalugumalai Rock Cut Temple",
        image: "Thoothukudi/Kalugumalai Rock Cut Temple.jpg",
        description:"An ancient hilltop temple carved from rock, famous for intricate sculptures and Jain heritage dating back to the 8th century."
      },
      {
        name: "Kazhugumalai",
        image: "Thoothukudi/Kazhugumalai.jpg",
        description:"Known for its rock-cut Jain caves and temples, showcasing impressive carvings and historical significance in Tamil Nadu."
      },
      {
        name: "Our Lady of Snows Basilica",
        image: "Thoothukudi/Our Lady of Snows Basilica.jpg",
        description:"A historic Catholic church known for its beautiful architecture and annual festival attracting thousands of devotees."
      }
    ]
  },
  {
    name: "Tiruchirappalli",
    image: "Tiruchirappalli/thirichirapalli.jpg",
    places: [
      {
        name: "Kallanai Dam",
        image: "Tiruchirappalli/Kallanai Dam.jpg",
        description:"One of the oldest water-diversion structures in the world, built by the Chola dynasty, still functioning and supporting irrigation."
      },
      {
        name: "Rockfort Temple",
        image: "Tiruchirappalli/Rockfort Temple.jpg",
        description:"A historic hilltop fort temple offering panoramic city views, known for its ancient rock-cut shrines and vibrant atmosphere."
      },
      {
        name: "Sri Ranganathaswamy Temple",
        image: "Tiruchirappalli/Sri Ranganathaswamy Temple.jpg",
        description:"One of the largest temple complexes in India, dedicated to Lord Vishnu, famed for its Dravidian architecture and festivals."
      }
    ]
  },
  {
    name: "Tirunelveli",
    image: "Tirunelveli/திருநெல்வேலி.jpg",
    places: [
      {
        name: "Courtallam Falls",
        image: "Tirunelveli/Courtallam Falls.jpg",
        description:"Known as the “Spa of South India,” these waterfalls are famous for their medicinal properties and scenic surroundings."
      },
      {
        name: "Nellaiappar Temple",
        image: "Tirunelveli/Nellaiappar Temple.jpg",
        description:"A grand temple dedicated to Lord Shiva, famous for its beautiful architecture, intricate carvings, and musical pillars."
      },
      {
        name: "Papanasam",
        image: "Tirunelveli/Papanasam.jpg",
        description:"A holy town with temples and waterfalls, believed to cleanse sins; a peaceful spot with rich spiritual significance."
      }
    ]
  },
  {
    name: "Tirupathur",
    image: "Tirupathur/thiruppathur.jpg",
    places: [
      {
        name: "Jalagandeeswarar Temple",
        image: "Tirupathur/Jalagandeeswarar Temple.jpg",
        description:"An ancient temple dedicated to Lord Shiva, known for its beautiful Dravidian architecture and peaceful atmosphere."
      },
      {
        name: "Vainu Bappu Observatory",
        image: "Tirupathur/Vainu Bappu Observatory.jpg",
        description:"One of India’s largest observatories, it conducts advanced astronomical research and offers stargazing opportunities."
      },
    ]
  },
  {
    name: "Tiruppur",
    image: "Tiruppur/thiruppur.jpg",
    places: [
      {
        name: "Amaravathi dam",
        image: "Tiruppur/Amaravathi dam.jpg",
        description:"Located in Amaravathinagar, 25 km south of Udumalpet, Amaravathi Dam was constructed in 1957 across the Amaravathi River. Situated within the Indira Gandhi Wildlife Sanctuary, it primarily serves irrigation, flood control, and hydroelectric power generation. "
      },
      {
        name: "Crocodile Park tiruppur",
        image: "Tiruppur/Crocodile Park tiruppur.jpg",
        description:"Established in 1976, the Amaravathi Crocodile Farm is one of India's largest crocodile nurseries, located approximately 1 km from the Amaravathi Dam. The farm plays a crucial role in the conservation of the endangered mugger crocodile (Crocodylus palustris), also known as the Persian crocodile."
      },
      {
        name: "Uthukuli Murugan Temple",
        image: "Tiruppur/Uthukuli Murugan Temple.jpg",
        description:"Known for its beautiful hilltop location, this temple attracts devotees seeking blessings from Lord Murugan."
      },
      {
        name: "அவிநாசியப்பர் கோவில்",
        image: "Tiruppur/அவிநாசியப்பர் கோவில்.jpg",
        description:"A historic temple dedicated to Lord Shiva, famous for its intricate carvings and vibrant annual festivals."
      }

    ]
  },
  {
    name: "Tiruvannamalai",
    image: "Tiruvannamalai/thiruvannamalai.jpg",
    places: [
      {
        name: "Annamalai Hills",
        image: "Tiruvannamalai/Annamalai Hills.jpg",
        description:"These sacred hills are part of the Eastern Ghats, revered in Hindu mythology. Pilgrims climb them as a spiritual practice, enjoying panoramic views and peaceful nature trails."
      },
      {
        name: "Arunachaleswarar Temple",
        image: "Tiruvannamalai/Arunachaleswarar Temple.jpg",
        description:"A majestic Hindu temple dedicated to Lord Shiva, famous for its grand architecture and spiritual significance. The temple hosts the annual Karthigai Deepam festival, attracting thousands."
      },
      {
        name: "Sathanur Dam",
        image: "Tiruvannamalai/Sathanur Dam.jpg",
        description:"Built across the Thenpennai River, this dam offers beautiful views, boating, and picnic spots. It supports irrigation and provides water to nearby areas, surrounded by lush greenery."
      }
    ]
  },
  {
    name: "thiruvarur",
    image: "Tiruvarur/thiruvarur.jpg",
    places: [
      {
        name: "Koothanur Saraswathi Temple",
        image: "Tiruvarur/Koothanur Saraswathi Temple.jpg",
        description:"Dedicated to Goddess Saraswathi, the temple is famous for its serene atmosphere and beautiful architecture. It’s a popular spot for students seeking blessings for education."
      },
      {
        name: "Thyagaraja Temple",
        image: "Tiruvarur/Thyagaraja Temple.jpg",
        description:"A historic temple dedicated to Lord Shiva, renowned for its unique dance deity and intricate carvings. It hosts the annual chariot festival attracting thousands of devotees."
      },
      {
        name: "Muthupet Mangrove Forest",
        image: "Tiruvarur/Muthupet Mangrove Forest.jpg",
        description:"A vast mangrove ecosystem with diverse flora and fauna, ideal for eco-tourism and bird watching. The forest helps protect the coastal environment and supports local fishermen."
      }
    ]
  },
  {
    name: "Vellore",
    image: "Vellore/VELLORE.jpg",
    places: [
      {
        name: "Amirthi Zoological Park",
        image: "Vellore/Amirthi Zoological Park.jpg",
        description:"A natural wildlife sanctuary with waterfalls, rich biodiversity, and various animal species. It’s a great spot for nature lovers and family outings."
      },
      {
        name: "Sripuram Golden Temple",
        image: "Vellore/Sripuram Golden Temple.jpg",
        description:"A stunning spiritual park featuring a golden temple dedicated to goddess Lakshmi. The temple’s gold-plated structure attracts devotees and tourists alike."
      },
      {
        name: "Vellore Fort",
        image: "Vellore/Vellore Fort.jpg",
        description:"A massive 16th-century fort known for its robust walls, moats, and historical significance during various dynasties. It houses ancient temples and a mosque inside."
      }
    ]
  },
  {
    name: "Villupuram",
    image: "Villupuram/விழுப்புரம்.jpg",
    places: [
      {
        name: "Gingee Fort",
        image: "Villupuram/Gingee Fort.jpg",
        description:"Known as the 'Troy of the East,'' this historic fort complex has impressive fortifications, granaries, and temples, showcasing architectural brilliance from the Vijayanagara era."
      },
      {
        name: "Mailam Murugan Temple",
        image: "Villupuram/Mailam Murugan Temple.jpg",
        description:"Located on a small hill, this Murugan temple is popular during Panguni Uthiram festival. The temple offers panoramic views and is known for its peaceful setting."
      },
      {
        name: "Melmalayanur Temple",
        image: "Villupuram/Melmalayanur Temple.jpg",
        description:"Dedicated to Goddess Angala Parameswari, this temple is famous for fire-walking rituals and spiritual significance, attracting devotees from across Tamil Nadu."
      }
    ]
  },
  {
    name: "Virudhunagar",
    image: "Virudhunagar/Virudhunagar.jpg",
    places: [
      {
        name: "Ayyanar Falls",
        image: "Virudhunagar/Ayyanar Falls.jpg",
        description:"Located near Rajapalayam, these scenic falls are surrounded by Western Ghats, offering trekking, bathing spots, and serene natural beauty for visitors."
      },
      {
        name: "Shenbaga Thoppu",
        image: "Virudhunagar/Shenbaga Thoppu.jpg",
        description:"A lush forest area known for rich biodiversity, rare plant species, and eco-tourism, situated near the Western Ghats, attracting nature lovers."
      },
      {
        name: "Srivilliputhur Andal Temple",
        image: "Virudhunagar/Srivilliputhur Andal Temple.jpg",
        description:"An ancient temple dedicated to Goddess Andal, known for its majestic tower and connection to Tamil Vaishnavite heritage and devotional hymns."
      }
    ]
  },




];

const container = document.getElementById("districtContainer");
const searchInput = document.getElementById("searchInput");
const backButton = document.getElementById("backButton");

// Show district list (name + photo only)
function renderDistrictList(data) {
  container.innerHTML = "";
  if (data.length === 0) {
    container.innerHTML = `<p class="text-center text-gray-500 col-span-2">No matching districts.</p>`;
    return;
  }



  data.forEach(d => {
    const card = document.createElement("div");
    card.className = "bg-white rounded-lg shadow p-2 text-center cursor-pointer hover:bg-gray-100 transition";

    const image = `<img src="${d.image}" alt="${d.name}" class="w-full h-48 object-cover max-md:hidden block rounded mb-2" />`;
    const name = `<h2 class="text-xl font-bold">${d.name}</h2>`;

    card.innerHTML = image + name;

    // Add click event to show places
    card.addEventListener("click", () => {
      renderDistrictWithPlaces(d);
    });

    container.appendChild(card);
  });
}

function renderDistrictWithPlaces(district) {
  const wrapper = document.getElementById("districtContainerWrapper");
  const container = document.getElementById("districtContainer");

  wrapper.classList.add("w-full");
  container.className = "w-full p-4";

  container.innerHTML = "";
  backButton.classList.remove("hidden");

  const card = document.createElement("div");
  card.className = "w-full bg-white p-4 rounded-lg shadow";

  card.innerHTML = `
    <img src="${district.image}" alt="${district.name}" class="w-full h-64 object-cover rounded mb-6 transition-opacity duration-700 opacity-0" onload="this.style.opacity='1'" />
    <h2 class="text-3xl font-bold text-center mb-6">${district.name}</h2>

    <!-- Masonry-style layout -->
    <div class="columns-1 sm:columns-2 md:columns-3 gap-4" id="placeList">
      ${district.places.map((p, index) => `
        <div class="mb-4 break-inside-avoid bg-gray-100 p-4 rounded-lg shadow transition-transform duration-300 hover:scale-[1.03]" 
             onclick="showDescription(${index})">
          <img src="${p.image}" alt="${p.name}" 
               class="w-full cursor-pointer rounded mb-2 transition-opacity duration-700 opacity-0 hover:brightness-95 hover:shadow-lg" 
               onload="this.style.opacity='1'" />
          <p class="text-lg font-semibold text-center cursor-pointer">${p.name}</p>
<p class="text-gray-600 mt-2  description hidden" id="desc-${index}">
  ${p.description || "No description available."}
</p>
        </div>
      `).join('')}
    </div>
  `;

  container.appendChild(card);

  backButton.onclick = () => {
    container.className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl mx-auto";
    renderDistrictList(districts);
    backButton.classList.add("hidden");
  };
}

let activeIndex = null;
let typer = null;

function showDescription(index) {
  const all = document.querySelectorAll(".description");
  const target = document.getElementById(`desc-${index}`);

  // Stop previous animation
  clearInterval(typer);

  // Toggle off if same image clicked again
  if (activeIndex === index) {
    target.classList.add("hidden");
    activeIndex = null;
    return;
  }

  // Hide all descriptions
  all.forEach(d => d.classList.add("hidden"));

  // Prepare typing
  const text = target.dataset.original || target.textContent;
  if (!target.dataset.original) target.dataset.original = text;

  target.textContent = "";
  target.classList.remove("hidden");

  let i = 0;
  typer = setInterval(() => {
    if (i < text.length) {
      target.textContent += text[i++];
    } else {
      clearInterval(typer);
    }
  }, 40);

  activeIndex = index;
}









// Handle live typing
searchInput.addEventListener("input", () => {
  const keyword = searchInput.value.trim().toLowerCase();

  if (keyword === "") {
    renderDistrictList(districts); // show all if empty
    return;
  }

  // Check exact match first
  const exactMatch = districts.find(d => d.name.toLowerCase() === keyword);
  if (exactMatch) {
    renderDistrictWithPlaces(exactMatch);
    return;
  }

  // Else, do live filter (name includes typed letters)
  const filtered = districts.filter(d => d.name.toLowerCase().includes(keyword));
  renderDistrictList(filtered);
});

// Initial load
renderDistrictList(districts);