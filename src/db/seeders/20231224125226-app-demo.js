"use strict";

const { query } = require("winston");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          uuid: "123e4567-e89b-12d3-a456-426614174000",
          email: "hellosolvin@gmail.com",
          name: "John Doe",
          type: "admin",
          password: "Abc123!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert("trees", [
      {
        uuid: "123e4567-e89b-12d3-a456-426614174001",
        name: "Pohon Bodhi",
        sciName: "Ficus religiosa L. 1753",
        image: "https://picsum.photos/200",
        description:
          "Tumbuhan Ficus religiosa L. (Pohon Bodhi) merupakan tumbuhan berbentuk pohon yang bisa tumbuh mencapai 15-30 m jika kondisi tanahnya sesuai dan mendukung. Daerah sebaran asli pohon ini mulai dari Pakistan, India, sampai ke Myanmar di Asia Selatan. Setiap batangnya memiliki cabang yang banyak sehingga terlihat rimbun dilihat dari jauh dan menyerupai pohon beringin. Diameter batangnya bisa mencapai 3 meter. Pohon bodhi memiliki ciri khas berbentuk besar dan dijadikan sebagai tempat berteduh dan bisa mengeluarkan oksigen siang dan malam. Memiliki daun licin kasar, bulat telur lebar, panjang 9-18 cm dan lebar 7,5-12 cm, tersusun spiral. Daunnya mempunyai ujung mirip ekor yang khas, panjangnya mencapai 5 cm. Tangkai daun ramping, panjang 6-10 cm., tulang-tulang cabang samping menonjol, 5-9 pasang. Bunga berkelamin tunggal, bersifat monoecious, yang muda berwarna merah jambu, berubah menjadi hijau tua saat dewasa. Buah pohon bodhi memiliki diameter sekitar 1-2 cm dan ukurannya cukup kecil. Ketika masih muda buahnya berwarna hijau kemudian setelah masak menjadi warna ungu. Buahnya tumbuh dengan menggerombol di sepanjang cabang batang. Ukuranya berbeda-beda karena masa tumbuhnya tidak sama. Rasa buah bodhi tidak begitu manis tetapi bisa dikonsumsi karena memiliki khasiat untuk kesehatan.",
        benefit:
          "Memiliki kegunaan lingkungan dan kegunaan sosial, sebagai makanan hewani dan obat-obatan serta sebagai bahan bakar dan makanan. Ficus religiosa adalah pohon suci bagi umat Buddha karena diyakini sebagai tempat di mana Sang Buddha mencapai pencerahan. Selain itu, pohon ini juga memiliki nilai ekonomi dan kultural, seperti kayunya yang dapat dijadikan bahan bangunan dan daunnya yang digunakan untuk upacara keagamaan. Beberapa penelitian menunjukkan bahwa ekstrak daun Bodhi Ficus religiosa memiliki aktivitas antioksidan, antiinflamasi, dan antibakteri yang potensial dalam pengobatan berbagai penyakit. Ada 2 pohon bodhi yang ditanaman berada di sekitar area halaman depan Kampus Utama Kampus 4 UAD bagian depan dekat parkiran mobil; dimanfaatkan sebagai pohon peneduh sekaligus pohon hias dan rumah bagi burung-burung dan hewan-hewan lain.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: "123e4567-e89b-12d3-a456-426614174002",
        name: "Pohon Beringin",
        sciName: "Ficus benjamina L. 1753",
        image: "https://picsum.photos/200",
        description:
          "Ficus benjamina adalah spesies pohon yang berasal dari Asia Tenggara dan Australia. Pohon ini termasuk dalam suku ara-araan (Moraceae). Pohon ini memiliki nama umum beringin, beringin benjar, beringin weh, beringin karet, beringin kopo, beringin jawa, beringin putih, beringin laut, beringin keramat, beringin kencana, beringin kuda, bering dan beringin kantil. Pohon ini memiliki tinggi 30 meter dengan diameter 1 meter. Batangnya berwarna abu-abu kecoklatan, berlekuk-lekuk, dan berlendir. Daunnya berwarna hijau mengkilap, berbentuk bulat telur, panjang 6-13 cm, dan lebar 2-6 cm. Bunga jantan berbentuk bulat telur, panjang 2-3 mm, dan berwarna hijau. Bunga betina berbentuk bulat telur, panjang 1-2 mm, dan berwarna hijau. Buahnya berbentuk bulat telur, panjang 1-1,5 cm, dan berwarna hijau. Pohon ini dapat tumbuh di daerah dataran rendah hingga ketinggian 1.500 meter di atas permukaan laut. Pohon ini dapat tumbuh di tanah yang subur dan lembab. Pohon ini dapat ditemukan di hutan-hutan, tepi sungai, dan tepi jalan. Pohon ini dapat ditemukan di Asia Tenggara, Australia, dan Kepulauan Pasifik. Pohon ini dapat ditemukan di Indonesia, Malaysia, Thailand, Vietnam, Filipina, Papua Nugini, Australia, dan Kepulauan Pasifik. Pohon ini dapat ditemukan di hutan-hutan, tepi sungai, dan tepi jalan. Pohon ini dapat ditemukan di Asia Tenggara, Australia, dan Kepulauan Pasifik. Pohon ini dapat ditemukan di Indonesia, Malaysia, Thailand, Vietnam, Filipina, Papua Nugini, Australia, dan Kepulauan Pasifik.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: "123e4567-e89b-12d3-a456-426614174003",
        name: "Pohon Saputangan",
        sciName: "Cynometra grandiflora A.Gray 1854",
        image: "https://picsum.photos/200",
        description:
          "Tumbuhan ini bersal dari kepualauan Maluku serta Papua. Tumbuhan ini berbentuk pohon, tinggi bisa mencapai 15 meter. Batang tegak, bundar, percabangan simpodial serta berwarna colat. Daun berupa daun majemuk menyirip gasal, pertulangan anak daun menyirip, lonjong, tepi rata, ujung dan pangkal daun runcing. Panjang anak daun 7 sampai 14 cm, lebar 3–8 cm dengan panjang tangkai antara 1-1,5 cm serta berwarna hijau. Memiliki bunga majemuk berbentuk malai dan terletak di ketiak daun dan ujung cabang pohon. Bentuk tangkai bunga bulat, panjag 1–2 cm dan berwarna hijau. Kelopak bunga berbentuk cawan, seludang bunga lonjong, mahkota bunga lepas dan berwarna kuning. Buah tanaman ini termasuk buah polong. Biji berbentuk ginjal, berwarna hitam, dan berukuran kecil. Jenis akarnya termasuk akar tunggang, dan berwarna putih kecokelatan. Tumbuhan ini memiliki manfaat untuk obat gangguan pencernaan. Daun, buah, dan kulit batang mengandung saponin, flavonoid, dan polifenol. Pohon Sapu Tangan dapat berfungsi sebagai tanamann hias dan peneduh yang bisa mengurangi polusi dengan menyerap polutan karbon monoksida (CO). Pada tumbuhan ini daun mudanya muncul diujung ranting, menggerombal, mekar serempak, menggantung semacam helaian sapu tangan, bisa tumbuh sampai tinggi15 meter sehingga sangat sesuai digunakan untuk peneduh.  Tumbuhan sapu tangan ini di tanam di Kampus 4 Universitas Ahmad Dahlan di sekitar Area Kampus Utama Bagian Depan dan Parkiran Mobil dan Area Antara Kampus Utama dan Lab Kampus.Tumbuhan ini ditanam sebagai penghias dan penghijauan kampus,",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("synonims", [
      {
        treeId: "123e4567-e89b-12d3-a456-426614174001",
        type: "homotypic",
        sciName: "Maniltoa grandiflora (A.Gray)Scheff.",
        url: "https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:505905-1",
        description: "in Ann. Jard. Bot. Buitenzorg 1: 20 (1876)",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        treeId: "123e4567-e89b-12d3-a456-426614174001",
        type: "heterotypic",
        sciName: "Cynometra grandiflora A.Gray",
        url: "https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:48819-1",
        description: "in Proc. Amer. Acad. Arts 6: 541 (1866)",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        treeId: "123e4567-e89b-12d3-a456-426614174001",
        type: "homotypic",
        sciName: "Cynometra grandiflora A.Gray var. grandiflora",
        url: "https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:48820-1",
        description: "in Proc. Amer. Acad. Arts 6: 541 (1866)",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        treeId: "123e4567-e89b-12d3-a456-426614174002",
        type: "homotypic",
        sciName: "Ficus benjamina var. benjamina",
        url: "https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:853542-1",
        description: "in Fl. Ind. 2: 511 (1856)",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        treeId: "123e4567-e89b-12d3-a456-426614174002",
        type: "heterotypic",
        sciName: "Ficus benjamina var. nitida Miq.",
        url: "https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:853543-1",
        description: "in Fl. Ned. Ind., Eerste Bijv. 1: 608 (1861)",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        treeId: "123e4567-e89b-12d3-a456-426614174002",
        type: "heterotypic",
        sciName: "Ficus benjamina var. parvifolia Miq.",
        url: "https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:853544-1",
        description: "in Fl. Ned. Ind., Eerste Bijv. 1: 608 (1861)",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        treeId: "123e4567-e89b-12d3-a456-426614174002",
        type: "homotypic",
        sciName: "Ficus benjamina var. puberula Miq.",
        url: "https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:853545-1",
        description: "in Fl. Ned. Ind., Eerste Bijv. 1: 608 (1861)",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        treeId: "123e4567-e89b-12d3-a456-426614174003",
        type: "homotypic",
        sciName: "Cynometra grandiflora A.Gray var. grandiflora",
        url: "https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:48820-1",
        description: "in Proc. Amer. Acad. Arts 6: 541 (1866)",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        treeId: "123e4567-e89b-12d3-a456-426614174003",
        type: "heterotypic",
        sciName: "Cynometra grandiflora A.Gray var. glabra Miq.",
        url: "https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:48821-1",
        description: "in Fl. Ned. Ind., Eerste Bijv. 1: 608 (1861)",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        treeId: "123e4567-e89b-12d3-a456-426614174003",
        type: "heterotypic",
        sciName: "Cynometra grandiflora A.Gray var. pubescens Miq.",
        url: "https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:48822-1",
        description: "in Fl. Ned. Ind., Eerste Bijv. 1: 608 (1861)",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("campuses", [
      {
        name: "Kampus 1",
        description: "Kampus Utama UAD",
        location: "Jl. Kapas No. 9, Semaki, Umbulharjo, Kota Yogyakarta",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kampus 2",
        description: "Kampus 2 UAD",
        location: "Jl. Ring Road Utara, Ngringin, Condongcatur, Depok, Sleman",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kampus 3",
        description: "Kampus 3 UAD",
        location: "Jl. Janti, Karang Jambe, Banguntapan, Bantul",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kampus 4",
        description: "Kampus 4 UAD",
        location:
          "Jl. Laksda Adisucipto No. 1, Demangan, Gondokusuman, Yogyakarta",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("tree_locs", [
      {
        treeId: "123e4567-e89b-12d3-a456-426614174001",
        campusId: 4,
        description: "Depan Parkiran Mobil, Kampus Utama",
        lat: -7.833483342332187,
        lng: 110.38294480090902,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        treeId: "123e4567-e89b-12d3-a456-426614174002",
        campusId: 4,
        description: "Disamping Parkiran Mobil",
        lat: -7.8338261183535645,
        lng: 110.3830225849627,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        treeId: "123e4567-e89b-12d3-a456-426614174003",
        campusId: 4,
        description: "Depan Parkiran Mobil",
        lat: -7.8338154896439685,
        lng: 110.38230911743585,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
    await queryInterface.bulkDelete("trees", null, {});
    await queryInterface.bulkDelete("synonims", null, {});
    await queryInterface.bulkDelete("campuses", null, {});
    await queryInterface.bulkDelete("tree_locs", null, {});
  },
};
