const defaultCover = 'cover.jpg'; // Set the path to your default cover image

const ap = new APlayer({
    container: document.getElementById('aplayer'),
    listFolded: true,
    theme: '#ff7300',
    listMaxHeight: 120,
    audio: [
        {
            name: 'Faded',
            artist: 'Alan Walker',
            url: 'mp3/alan.mp3',
            cover: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Alan-Walker-_Faded.jpg'
        },
        {
            name: 'Jamal Kudu',
            artist: 'Animal 2023',
            url: 'mp3/Jamal Kudu - Animal.mp3',
            cover: 'https://upload.wikimedia.org/wikipedia/en/9/90/Animal_%282023_film%29_poster.jpg'
        },
        {
            name: 'KILLING JEEJA-BGM',
            artist: 'Animal 2023',
            url: 'mp3/KILLING-JEEJA-ANIMAL-BGM_.mp3',
            cover: 'https://upload.wikimedia.org/wikipedia/en/9/90/Animal_%282023_film%29_poster.jpg'
        },
        {
            name: 'Papa Meri Jaan',
            artist: 'Animal 2023',
            url: 'mp3/Papa Meri Jaan - Animal.mp3',
            cover: 'https://upload.wikimedia.org/wikipedia/en/9/90/Animal_%282023_film%29_poster.jpg'
        },
        {
            name: 'Pehle Bhi Main',
            artist: 'Animal 2023',
            url: 'mp3/Pehle Bhi Main - Animal 128 Kbps.mp3',
            cover: 'https://upload.wikimedia.org/wikipedia/en/9/90/Animal_%282023_film%29_poster.jpg'
        },
        {
            name: 'Tere Sang Yaara',
            artist: 'Rustom 2016',
            url: 'mp3/music-1.mp3',
            cover: 'https://upload.wikimedia.org/wikipedia/en/9/96/Akshay_Kumar%27s-Rustom_poster.jpg'
        },
        {
            name: 'Dil Ko Karaar Aaya',
            artist: 'Neha Kakkar',
            url: 'mp3/music-2.mp3',
            cover: 'https://a10.gaanacdn.com/gn_img/song/6Zxb2r7b9w/xb2kGyPOK9/size_m_1596276066.webp'
        },
        {
            name: 'Kusu Kusu',
            artist: 'Satyameva Jayate 2',
            url: 'mp3/music-3.mp3',
            cover: 'https://c.saavncdn.com/943/Kusu-Kusu-From-Satyameva-Jayate-2--Hindi-2021-20211110111921-500x500.jpg'
        },
        {
            name: 'Meri Zindagi Hai Tu',
            artist: 'Satyameva Jayate 2',
            url: 'mp3/music-4.mp3',
            cover: 'https://c.saavncdn.com/731/Meri-Zindagi-Hai-Tu-From-Satyameva-Jayate-2--Hindi-2021-20211028031002-500x500.jpg'
        },
        {
            name: 'Raatan Lambiyan',
            artist: 'Sershah',
            url: 'mp3/music-5.mp3',
            cover: 'https://c.saavncdn.com/222/Raataan-Lambiyan-From-Shershaah--Hindi-2021-20210729181107-500x500.jpg'
        },
        {
            name: 'Tumko Barish Pasand Hai',
            artist: 'Neha Kakkar',
            url: 'mp3/music-6.mp3',
            cover: 'https://cdn4.sharechat.com/Q3E26DDK32H4o28v3AZji4G4AOKo36UZ4J6l_new_compressed_thumb.jpeg?tenant=sc&referrer=pwa-sharechat-service&f=thumb.jpeg'
        },
        {
            name: 'A thousand years',
            artist: 'Christina Perri',
            url: 'mp3/music-7.mp3',
            cover: 'https://i1.sndcdn.com/artworks-000213897536-s74bce-t500x500.jpg'
        },
        {
            name: 'Aj raate kono rupkotha nei',
            artist: 'Old school',
            url: 'mp3/music-8.mp3',
            cover: 'https://i.pinimg.com/736x/4b/04/66/4b0466f559a08016eccf262b6d358ecb.jpg'
        },
        {
            name: 'Alo Aloo',
            artist: 'Tahsan',
            url: 'mp3/music-9.mp3',
            cover: 'https://i.scdn.co/image/ab67616d0000b273dc272f66aad69883c1251d68'
        },
        {
            name: 'Ami megh chure dei',
            artist: 'Carbonized',
            url: 'mp3/music-10.mp3',
            cover: 'https://source.boomplaymusic.com/group10/M00/04/04/cb6c2ed2ad414427b3949afbd49fc68e_464_464.jpg'
        },
        {
            name: 'Bhalobasha Tar Por',
            artist: 'Arnob',
            url: 'mp3/music-11.mp3',
            cover: 'https://i.scdn.co/image/ab67616d0000b27347f2a2cba60192e402766a94'
        },
        {
            name: 'Tor Jonno Ami Bonno',
            artist: 'Fuad',
            url: 'mp3/music-12.mp3',
            cover: 'https://images.genius.com/d74df413388ff0ce17a8c658537a4754.480x360x1.jpg'
        },
        {
            name: 'Jadur Sohor',
            artist: 'Chirkut',
            url: 'mp3/music-13.mp3',
            cover: 'https://i1.sndcdn.com/artworks-000054419343-5rsjv1-t500x500.jpg'
        },
        {
            name: 'Sharthopor',
            artist: 'Trap',
            url: 'mp3/music-14.mp3',
            cover: ''
        },
        {
            name: 'Shihoron',
            artist: 'Miftah Zaman',
            url: 'mp3/music-15.mp3',
            cover: ''
        },
        {
            name: 'Khola Janala',
            artist: 'SWAT',
            url: 'mp3/music-16.mp3',
            cover: ''
        },
        {
            name: 'Where do u go',
            artist: 'No Mercy',
            url: 'mp3/music-17.mp3',
            cover: ''
        },
        {
            name: 'Watch Over You',
            artist: 'Blackbird',
            url: 'mp3/music-18.mp3',
            cover: ''
        },
        {
            name: 'Purnota',
            artist: 'Warfaze',
            url: 'mp3/music-19.mp3',
            cover: ''
        },
        {
            name: 'Shey Raate',
            artist: 'Artcell',
            url: 'mp3/music-20.mp3',
            cover: ''
        },
        {
            name: 'Whenever whenever',
            artist: 'Shakira',
            url: 'mp3/music-21.mp3',
            cover: ''
        },
        {
            name: 'QUIT PLAYING GAMES',
            artist: 'Backstreet Boys',
            url: 'mp3/music-22.mp3',
            cover: ''
        },
        {
            name: 'Hariye Giyechi',
            artist: 'Arnob',
            url: 'mp3/music-23.mp3',
            cover: ''
        },
        {
            name: 'Hot N Cold',
            artist: 'Katy Perry',
            url: 'mp3/music-24.mp3',
            cover: ''
        },
        {
            name: 'Nikosh kalo',
            artist: 'Paper Rhyme',
            url: 'mp3/music-25.mp3',
            cover: ''
        },
        {
            name: 'Shahar - Bapi Bari Jaa',
            artist: 'Arjun Mimi Bonnie Jeet Gannguli',
            url: 'mp3/music-26.mp3',
            cover: ''
        },
        {
            name: 'Nobina',
            artist: 'Fuad_Ft_Poonam',
            url: 'mp3/music-27.mp3',
            cover: ''
        },
        {
            name: 'One Love',
            artist: 'Blue',
            url: 'mp3/music-28.mp3',
            cover: ''
        },	
        {
            name: 'She Je Boshe Ache',
            artist: 'Arnob',
            url: 'mp3/music-29.mp3',
            cover: ''
        },	
        {
            name: 'Nitol Paye',
            artist: 'Fuad',
            url: 'mp3/music-30.mp3',
            cover: ''
        },	
        {
            name: 'Love The Way You Lie',
            artist: 'Eminem -  ft. Rihanna',
            url: 'mp3/music-31.mp3',
            cover: ''
        },
        {
            name: 'Himaloy',
            artist: 'Debi',
            url: 'mp3/music-32.mp3',
            cover: ''
        },
        {
            name: 'Tomar_Jonno',
            artist: 'Arnob',
            url: 'mp3/music-33.mp3',
            cover: ''
        },
        {
            name: 'Shunil_Boruna',
            artist: 'Mahadi',
            url: 'mp3/music-34.mp3',
            cover: ''
        },
        {
            name: 'Gale Lag Ja',
            artist: 'De Dana Dan',
            url: 'mp3/music-35.mp3',
            cover: ''
        },
        {
            name: 'Ik Vaari Aa - Raabta',
            artist: 'Arijit Singh',
            url: 'mp3/music-36.mp3',
            cover: ''
        },
        {
            name: 'Aabaad Barbaad',
            artist: 'Ludo',
            url: 'mp3/music-37.mp3',
            cover: ''
        },
        {
            name: 'Aankh Marey',
            artist: 'Simmba',
            url: 'mp3/music-38.mp3',
            cover: ''
        },
        {
            name: 'Hal E Dil - Acoustic',
            artist: 'Murder 2',
            url: 'mp3/music-39.mp3',
            cover: ''
        },
        {
            name: 'Chahun Main Ya Naa',
            artist: 'Arijit Singh',
            url: 'mp3/music-40.mp3',
            cover: ''
        },
        {
            name: 'Dil Ka Telephone',
            artist: 'Dream Girl',
            url: 'mp3/music-41.mp3',
            cover: ''
        },
        {
            name: 'Radhe Radhe',
            artist: 'Dream Girl',
            url: 'mp3/music-42.mp3',
            cover: ''
        },
        {
            name: 'Main Rahoon Ya Na Rahoon',
            artist: 'Armaan Malik',
            url: 'mp3/music-43.mp3',
            cover: ''
        },
        {
            name: 'O Bekhabar O Bekadar',
            artist: 'AAction Replayy',
            url: 'mp3/music-44.mp3',
            cover: ''
        },
        {
            name: 'Woh Pehli Baar',
            artist: 'Shaan',
            url: 'mp3/music-45.mp3',
            cover: ''
        },
        {
            name: 'Thare Vaaste',
            artist: 'Parmanu',
            url: 'mp3/music-46.mp3',
            cover: ''
        },
        {
            name: 'Soch Na Sake',
            artist: 'Arijit Singh',
            url: 'mp3/music-47.mp3',
            cover: ''
        },
        {
            name: 'Oporadhi',
            artist: 'Arman_Alif',
            url: 'mp3/music-48.mp3',
            cover: ''
        },
        {
            name: 'Faishha Gesi',
            artist: 'Hyder Husyn',
            url: 'mp3/music-50.mp3',
            cover: ''
        },
        {
            name: 'Shorkari Officer',
            artist: 'Hyder Husyn',
            url: 'mp3/music-51.mp3',
            cover: ''
        },
        {
            name: 'Tirish Bochhor',
            artist: 'Hyder Husyn',
            url: 'mp3/music-52.mp3',
            cover: ''
        },
        {
            name: 'Kabhi Jo Baadal Barse - Female',
            artist: 'Shreya Ghoshal',
            url: 'mp3/music-54.mp3',
            cover: ''
        },
        {
            name: 'Raabta - Ik Vaari Aa',
            artist: 'Arijit Singh',
            url: 'mp3/music-59.mp3',
            cover: ''
        },
        {
            name: 'Raabta - Lambiyaan Si Judaiyaan',
            artist: 'Arijit Singh',
            url: 'mp3/music-60.mp3',
            cover: ''
        },
        {
            name: 'Aashiqui 2-The Love Theme',
            artist: 'Aashiqui 2',
            url: 'mp3/music-61.mp3',
            cover: ''
        },
        {
            name: 'Allah Ke Bande',
            artist: 'Kailash Kher',
            url: 'mp3/music-64.mp3',
            cover: ''
        },
        {
            name: 'Tum Hi Ho',
            artist: 'Aashiqui 2',
            url: 'mp3/music-65.mp3',
            cover: ''
        },
        {
            name: 'Bhula Dena',
            artist: 'Aashiqui 2',
            url: 'mp3/music-70.mp3',
            cover: ''
        },
        {
            name: 'Be Intehaan',
            artist: 'Race 2',
            url: 'mp3/music-72.mp3',
            cover: ''
        },
        {
            name: 'Jal Pari',
            artist: 'Atif Aslam',
            url: 'mp3/music-75.mp3',
            cover: ''
        },
        {
            name: 'Allah Hafiz',
            artist: 'Bhool Bhulaiya',
            url: 'mp3/music-79.mp3',
            cover: ''
        },
        {
            name: 'Hai Ishq Ye Kiya Ek Khata',
            artist: 'Bas Ek Pal',
            url: 'mp3/music-83.mp3',
            cover: ''
        },
        {
            name: 'Kaun Tujhe',
            artist: 'Palak Muchhal',
            url: 'mp3/music-84.mp3',
            cover: ''
        },
        {
            name: 'Manike Mage Hithe',
            artist: 'Thank God',
            url: 'mp3/music-85.mp3',
            cover: ''
        },
        {
            name: 'Beast Mode',
            artist: 'Beast',
            url: 'mp3/music-86.mp3',
            cover: ''
        },
        {
            name: 'Sulthan',
            artist: 'KGF Chapter 2',
            url: 'mp3/music-87.mp3',
            cover: ''
        },
        {
            name: 'Saibo',
            artist: 'Shor in the City',
            url: 'mp3/music-88.mp3',
            cover: ''
        },
        {
            name: 'Salamat',
            artist: 'Sarbjit',
            url: 'mp3/music-89.mp3',
            cover: ''
        },
        {
            name: 'Kaho Na Kaho',
            artist: 'Murder',
            url: 'mp3/music-90.mp3',
            cover: ''
        },
        {
            name: 'Labon Ko',
            artist: 'Bhul Bhulaiya',
            url: 'mp3/music-91.mp3',
            cover: ''
        },
        {
            name: 'Namo Namo',
            artist: 'Kedarnath',
            url: 'mp3/music-92.mp3',
            cover: ''
        },
        {
            name: 'Bheed Mein',
            artist: 'Tumsa Nahin Dekha',
            url: 'mp3/music-93.mp3',
            cover: ''
        },
        {
            name: 'Pee Loon',
            artist: 'Once Upon Mumbai',
            url: 'mp3/music-94.mp3',
            cover: ''
        },
        {
            name: 'Top BGM',
            artist: 'Tushar',
            url: 'mp3/music-95.mp3',
            cover: ''
        },
        {
            name: 'Neruppu Da',
            artist: 'Kabali',
            url: 'mp3/music-96.mp3',
            cover: ''
        },
        {
            name: 'Maine Chun Liya',
            artist: 'Dil Maange More',
            url: 'mp3/music-97.mp3',
            cover: ''
        },
        {
            name: 'Gustakh Dil Tere Liye',
            artist: 'Dil Maange More',
            url: 'mp3/music-98.mp3',
            cover: ''
        },
        {
            name: 'Aisa Deewana',
            artist: 'Dil Maange More',
            url: 'mp3/music-99.mp3',
            cover: ''
        },
        {
            name: 'Teri Meri',
            artist: 'Bodygurd',
            url: 'mp3/music-102.mp3',
            cover: ''
        },
        {
            name: 'Dard Karaara',
            artist: 'Kumar Sanu',
            url: 'mp3/music-106.mp3',
            cover: ''
        },
        {
            name: 'Chori Chori Dil Tera Churayenge',
            artist: 'Phool Aur Angaar',
            url: 'mp3/music-108.mp3',
            cover: ''
        },
        {
            name: 'Duniya Mein Kitni Hain Nafratien',
            artist: 'Mohabbatein',
            url: 'mp3/music-109.mp3',
            cover: ''
        },
        {
            name: 'Soni Soni Aakhiyon Wali',
            artist: 'Mohabbatein',
            url: 'mp3/music-112.mp3',
            cover: ''
        },
        {
            name: 'Pairon Mein Bandhan Hai',
            artist: 'Mohabbatein',
            url: 'mp3/music-113.mp3',
            cover: ''
        },
        {
            name: 'Pota Pota',
            artist: 'Aya Nakamura Copines',
            url: 'mp3/music-114.mp3',
            cover: ''
        },
        {
            name: 'BGM 22',
            artist: 'Tushar',
            url: 'mp3/music-117.mp3',
            cover: ''
        },
        {
            name: 'RRR 1',
            artist: 'BGM',
            url: 'mp3/music-118.mp3',
            cover: ''
        },
        {
            name: 'Tumi Bondhu Kala Pakhi',
            artist: 'Hawa',
            url: 'mp3/music-120.mp3',
            cover: ''
        },
        {
            name: 'Tor Ek Kothaye',
            artist: 'Arijit Singh',
            url: 'mp3/music-121.mp3',
            cover: ''
        },
        {
            name: 'Tui Borsha Bikeler Dheu',
            artist: 'Palak Muchhal, Shaan',
            url: 'mp3/music-122.mp3',
            cover: ''
        },
        {
            name: 'Tu Tu Hai Wahi',
            artist: 'Yeh Vaada Raha',
            url: 'mp3/music-123.mp3',
            cover: ''
        },
        {
            name: 'Bachna Ae Haseeno',
            artist: 'Bachna Ae Haseeno',
            url: 'mp3/music-124.mp3',
            cover: ''
        },
        {
            name: 'Shuk Pakhi',
            artist: 'Balam Ft. Julee',
            url: 'mp3/music-129.mp3',
            cover: ''
        },
        {
            name: 'Aajhor Bristi',
            artist: 'Balam Ft. Julee',
            url: 'mp3/music-130.mp3',
            cover: ''
        },
        {
            name: 'Premer Dhun',
            artist: 'Balam',
            url: 'mp3/music-131.mp3',
            cover: ''
        },
        {
            name: 'Tomar Jonno',
            artist: 'Balam',
            url: 'mp3/music-132.mp3',
            cover: ''
        },
        {
            name: 'Mon Majhi Re',
            artist: 'Arijit Singh',
            url: 'mp3/music-138.mp3',
            cover: ''
        },
        {
            name: 'Hukum - The Jailer',
            artist: 'Anirudh',
            url: 'mp3/music-139.mp3',
            cover: ''
        },
        {
            name: 'Vedalam The Theri Theme',
            artist: 'Anirudh',
            url: 'mp3/music-140.mp3',
            cover: ''
        },
        {
            name: 'Haoway_Haoway',
            artist: 'Habib_Nancy',
            url: 'mp3/music-143.mp3',
            cover: ''
        },
        {
            name: 'Hridoyer Kotha',
            artist: 'Habib ft. Shirin',
            url: 'mp3/music-144.mp3',
            cover: ''
        },
        {
            name: 'Main Tera Dhadkan Teri',
            artist: 'Ajab Prem Ki Ghazab Kahani',
            url: 'mp3/music-147.mp3',
            cover: ''
        },
        {
            name: 'Tera Hone Laga Hoon',
            artist: 'Ajab Prem Ki Ghazab Kahani',
            url: 'mp3/music-149.mp3',
            cover: ''
        },
        {
            name: 'Shonar Moina',
            artist: 'Arnob',
            url: 'mp3/music-150.mp3',
            cover: ''
        },
        {
            name: 'Valo Achi Valo Theko',
            artist: 'Rudra Mohammad Shahidullah',
            url: 'mp3/music-151.mp3',
            cover: ''
        },
        {
            name: 'Nithua Pathare',
            artist: 'Fazlur Rahman Babu',
            url: 'mp3/music-152.mp3',
            cover: ''
        },
        {
            name: 'Tumi Mor Jiboner Bhabona',
            artist: 'Andrew Kishore & Kanak Chapa',
            url: 'mp3/music-153.mp3',
            cover: ''
        },
        {
            name: 'Jao Pakhi Bolo Tare',
            artist: 'Krishnokoli',
            url: 'mp3/music-155.mp3',
            cover: ''
        },
        {
            name: 'Fighter Theme',
            artist: 'Fighter 2024',
            url: 'mp3/Fighter.mp3',
            cover: ''
        },
        {
            name: 'HanuMan BGM',
            artist: 'HanuMan PVCU 2024',
            url: 'mp3/HanuMan.mp3',
            cover: ''
        },
    ],
	
});

// Set default cover image if cover image is missing or invalid
ap.list.audios.forEach(function(audio) {
    if (!audio.cover || audio.cover.trim() === '') {
        audio.cover = defaultCover;
    }
});

// Search functionality
document.getElementById('searchButton').addEventListener('click', function() {
    var searchInput = document.getElementById('searchInput').value.toLowerCase();
    ap.list.audios.forEach(function(audio, index) {
        var name = audio.name.toLowerCase();
        var artist = audio.artist.toLowerCase();
        if (name.includes(searchInput) || artist.includes(searchInput)) {
            ap.list.switch(index);
            ap.play();
            return;
        }
    });
});


// Download button
document.getElementById('downloadButton').addEventListener('click', function() {
    var searchInput = document.getElementById('searchInput').value.toLowerCase();
    var searchedAudio = null;
    
    // Find the searched audio track
    ap.list.audios.forEach(function(audio) {
        var name = audio.name.toLowerCase();
        var artist = audio.artist.toLowerCase();
        if (name.includes(searchInput) || artist.includes(searchInput)) {
            searchedAudio = audio;
            return;
        }
    });
    
    if (searchedAudio) {
        var downloadLink = searchedAudio.url;
        
        // Create an anchor element to trigger the download
        var link = document.createElement('a');
        link.href = downloadLink;
        link.download = searchedAudio.name + '.mp3'; // Set the filename
        link.target = '_blank'; // Open in a new tab
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        alert('Audio track not found.');
    }
});



// Play/Pause button
document.getElementById('playPauseButton').addEventListener('click', function() {
    if (ap.audio.paused) {
        ap.play();
    } else {
        ap.pause();
    }
});

// Next button
document.getElementById('nextButton').addEventListener('click', function() {
    ap.skipForward();
});

// Previous button
document.getElementById('prevButton').addEventListener('click', function() {
    ap.skipBack();
});
