<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <title>PDIM Uniga Malang</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <meta content="" name="keywords" />
    <meta content="" name="description" />

    <!-- Google Web Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Inter:slnt,wght@-10..0,100..900&display=swap"
        rel="stylesheet" />

    <!-- Icon Font Stylesheet -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />

    <!-- Libraries Stylesheet -->
    <link rel="stylesheet" href="lib/animate/animate.min.css" />
    <link href="lib/lightbox/css/lightbox.min.css" rel="stylesheet" />
    <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />

    <!-- Customized Bootstrap Stylesheet -->
    <link href="css/bootstrap.min.css" rel="stylesheet" />

    <!-- Template Stylesheet -->
    <link href="css/style.css" rel="stylesheet" />
    <link href="img/logo.png" rel="icon" />
</head>

<body>
    <!-- Spinner Start -->
    <div id="spinner"
        class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div class="spinner-border text-primary" style="width: 3rem; height: 3rem" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </div>
    <!-- Spinner End -->

    <!-- Topbar Start -->
    <div class="container-fluid topbar px-0 px-lg-4 bg-light py-2 d-none d-lg-block">
        <div class="container">
            <div class="row gx-0 align-items-center">
                <div class="col-lg-8 text-center text-lg-start mb-lg-0">
                    <div class="d-flex flex-wrap">
                        <div class="border-end border-primary pe-3">
                            <a id="alamat" href="https://maps.app.goo.gl/eYiheZVH2NwdS3Qt9" class="text-muted small" target="_blank"><i
                                    class="fas fa-map-marker-alt text-primary me-2"></i>Jl.
                                Mertojoyo Blok L, Merjosari, Kec. Lowokwaru, Kota Malang, Jawa
                                Timur 65144
                            </a>
                        </div>
                        <div class="ps-3">
                            <a href="mailto:unigamalang@gmail.com" class="text-muted small"><i
                                    class="fas fa-envelope text-primary me-2"></i>pdim@unigamalang.ac.id</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 text-center text-lg-end">
                    <div class="d-flex justify-content-end">
                        <div class="d-flex border-end border-primary pe-3">
                            <a class="btn p-0 text-primary me-3" href="#"><i class="fab fa-facebook-f"></i></a>
                            <a class="btn p-0 text-primary me-3" href="#"><i class="fab fa-twitter"></i></a>
                            <a class="btn p-0 text-primary me-3" href="#"><i class="fab fa-instagram"></i></a>
                            <a class="btn p-0 text-primary me-0" href="#"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                        <div class="dropdown ms-3">
                            <a href="#" id="language-selector" class="dropdown-toggle text-dark" data-bs-toggle="dropdown">
                                <small><i class="fas fa-globe-europe text-primary me-2"></i>
                                    Indonesia</small>
                            </a>
                            <div class="dropdown-menu rounded">
                                <a href="#" class="dropdown-item pick" data-lang="en">English</a>
                                <a href="#" class="dropdown-item pick" data-lang="id">Indonesia</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Topbar End -->

    <!-- Navbar & Hero Start -->
    <div class="container-fluid nav-bar px-0 px-lg-4 py-lg-0">
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light">
                <a href="#" class="navbar-brand p-0">
                    <h1 class="text-primary mb-0">
                        <img src="img/logo.png" alt="Logo" /> PDIM
                    </h1>
                    <!-- <i class="fab fa-slack me-2"></i> -->
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="fa fa-bars"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav mx-0 mx-lg-auto">
                        <a href="#home" id="navHome" class="nav-item nav-link">Home</a>
                        <a href="#about" id="navAbout" class="nav-item nav-link">About</a>
                        <!-- <a href="#tujuan" id="navTujuan" class="nav-item nav-link">Tujuan</a> -->
                        <a href="#daftardosen" id="navDaftarDosen" class="nav-item nav-link">Dosen</a>
                        <div class="nav-item dropdown">
                            <a id="navAkademik" class="nav-link dropdown-toggle" type="button" id="dropdownMenuButton1"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Akademik
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li>
                                    <a id="dropMataKuliah" class="dropdown-item" href="mata-kuliah.html">Kurikulum</a>
                                </li>
                                <li>
                                    <a id="dropPedomanPendidikan" class="dropdown-item" target="_blank"
                                        href="pedoman-pendidikan.html">Pedoman
                                        Pendidikan</a>
                                </li>
                                <li><a id="dropLms3" class="dropdown-item" href="https://lms3.unigamalang.ac.id/"
                                        target="_blank">LMS</a></li>
                                <li>
                                    <a id="dropSiakad" class="dropdown-item" href="https://siska.unigamalang.ac.id/"
                                        target="_blank">Siakad</a>
                                </li>
                                <li>
                                    <a id="dropeLibrary" class="dropdown-item" href="https://library.pasca.unigamalang.ac.id/"
                                        target="_blank">e-Library
                                        Pasca</a>
                                </li>
                            </ul>
                        </div>
                        <a id="navDaftar" href="https://daftar.siska.unigamalang.ac.id/" target="_blank"
                            class="nav-item nav-link">Daftar</a>
                    </div>
                </div>
                <div class="d-none d-xl-flex flex-shrink-0 ps-4">
                    <a href="#" class="btn btn-light btn-lg-square rounded-circle position-relative wow tada"
                        data-wow-delay=".9s">
                        <i class="fa fa-phone-alt fa-2x"></i>
                        <div class="position-absolute" style="top: 7px; right: 12px">
                            <span><i class="fa fa-comment-dots text-secondary"></i></span>
                        </div>
                    </a>
                    <div class="d-flex flex-column ms-3">
                        <!-- <span>Contact</span> -->
                        <a href="tel:+ 0123 456 7890">
                            <span id="kantor" class="text-dark"><i class="fa fa-phone-alt"></i> 0341-562411 (Kantor)</span>
                        </a>
                        <a href="tel:+ 0123 456 7890">
                            <span class="text-dark"><i class="fab fa-whatsapp"></i> 085954447800</span>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    <!-- Navbar & Hero End -->

    <!-- Modal Search Start -->
    <div class="modal fade" id="searchModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content rounded-0">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                        Search by keyword
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body d-flex align-items-center bg-primary">
                    <div class="input-group w-75 mx-auto d-flex">
                        <input type="search" class="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1" />
                        <span id="search-icon-1" class="btn bg-light border nput-group-text p-3"><i class="fa fa-search"></i></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal Search End -->