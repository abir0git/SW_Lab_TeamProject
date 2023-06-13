const Welcm_user = () => {
    return (
        <div>
            {/* <!-- ### Prototype developed in 2019 ### --> */}

            {/* <!-- Preloader --> */}
            <div class="loader">
                <div class="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            {/* <!-- Navbar --> */}
            <nav class="navbar navbar-expand-lg align-items-start">
                <button class="navbar-toggler" type="button" id="menu-toggle">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="col-4 col-sm-3">
                    <img src="https://pngimage.net/wp-content/uploads/2018/06/generic-company-logo-png-7.png" class="img-fluid logo ml-sm-4" style="opacity: .5" />
                </div>

                <div class="col-4 col-md-5 d-none d-md-flex  flex-column">
                    {/* <!-- Pesquisa responsiva --> */}
                    <div class="input-group m-2 d-none d-md-flex">
                        <input type="search" class="form-control animated-search-filter search" id="pesquisageral" name="pesquisageral" placeholder="search infos and modules" aria-label="Pesquise" aria-describedby="button-addon2" />
                    </div>

                </div>

                <div class="col-4">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto mt-md-2">
                            <li class="nav-item pl-4 dropdown">
                                <a class="nav-link dropdown-toggle" style="white-space: normal" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"><i class="lni lni-user border rounded-circle border-primary p-1 mr-1"></i> Options<span class="sr-only">(current)</span>
                                </a>

                            </li>
                        </ul>
                    </div>
                </div>

            </nav>
            {/* <!-- /#Navbar --> */}

            <div class="ml-5 mr-3 px-3 bg-white" id="collapseSearch" style="max-height: 50vh;overflow: auto;">
                <div class="container px-4">
                    <div class="row" id="result">

                        {/* <!-- Dynamic content --> */}

                    </div>
                </div>
            </div>

            {/* <!-- Office 365 --> */}
            <div class="collapse ml-5 mr-3 px-3 bg-white" id="collapseExample" style="position: sticky; top: 75px; left: 0;right: 0px;z-index: 1;">
                <div class="row py-4">
                    <div class="col-md-2 col-sm-3 col-4">
                        <a href="#" class="card cards-office rounded-lg border-0 d-flex align-items-center justify-content-center pt-4 pb-3 hover">
                            <img src="https://gatoledo.com/proj-codepen/svg/onedrive.svg" width="55px" />
                            <p class="text-center text-dark pt-2"> One Drive</p>
                        </a>
                    </div>
                    <div class="col-md-2 col-sm-3 col-4">
                        <a href="#" class="card cards-office rounded-lg border-0 d-flex align-items-center justify-content-center py-3 hover">
                            <img src="https://gatoledo.com/proj-codepen/svg/outlook.svg" width="50px" />
                            <p class="text-center text-dark pt-2"> Outlook</p>
                        </a>
                    </div>
                    <div class="col-md-2 col-sm-3 col-4">
                        <a href="https://www.office.com/launch/word" class="card cards-office rounded-lg border-0 d-flex align-items-center justify-content-center py-3 hover">
                            <img src="https://gatoledo.com/proj-codepen/svg/word.svg" width="50px" />
                            <p class="text-center text-dark pt-2"> Word</p>
                        </a>
                    </div>
                    <div class="col-md-2 col-sm-3 col-4">
                        <a href="https://www.office.com/launch/excel" class="card cards-office rounded-lg border-0 d-flex align-items-center justify-content-center py-3 hover">
                            <img src="https://gatoledo.com/proj-codepen/svg/excel.svg" width="50px" />
                            <p class="text-center text-dark pt-2"> Excel</p>
                        </a>
                    </div>
                    <div class="col-md-2 col-sm-3 col-4">
                        <a href="https://www.office.com/launch/powerpoint" class="card cards-office rounded-lg border-0 d-flex align-items-center justify-content-center py-3 hover">
                            <img src="https://gatoledo.com/proj-codepen/svg/powerpoint.svg" width="50px" />
                            <p class="text-center text-dark pt-2"> Power Point</p>
                        </a>
                    </div>
                    <div class="col-md-2 col-sm-5">
                        <div class="drop-user shadow-md" style="border: 1px solid rgb(222, 239, 255); border-radius: 8px;">
                            <a class="dropdown-item assinatura-nav text-primary" href="#" style="white-space: normal;">E-mail</a>
                            <a class="dropdown-item" href="#">My profile</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item text-center" href="#">Logout</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--/ Office 365 --> */}

            {/* <!-- Content --> */}
            <div class="d-flex" id="wrapper">

                {/* <!-- Sidebar --> */}
                <div id="sidebar-wrapper" style="z-index: 1">
                    <div class="list-group list-group-flush bg-white" id="sidenav">
                        <a class="d-flex align-items-center border-bottom p-3 text-secondary home active"><i class="lni lni-home size-sm pr-4 font-24"></i>Home</a>
                        <a class="d-flex align-items-center border-bottom p-3 text-secondary acad" id="acad"><i class="lni lni-graduation size-sm pr-4 font-24"></i>Study</a>
                        <a class="d-flex align-items-center border-bottom p-3 text-secondary adm" id="adm"><i class="lni lni-briefcase size-sm pr-4 font-24"></i>Business</a>
                        <a class="d-flex align-items-center border-bottom p-3 text-secondary beneficios"><i class="lni lni-handshake size-sm pr-4 font-24"></i>Benefit</a>
                        <a class="d-flex align-items-center border-bottom p-3 text-secondary visoes" style="white-space: nowrap;"><i class="lni lni-files size-sm pr-4 font-24"></i>Documents</a>
                        <a class="d-flex align-items-center border-bottom p-3 text-secondary info"><i class="lni lni-keyword-research size-sm pr-4 font-24"></i>Informations</a>
                    </div>
                </div>
                {/* <!-- /#sidebar-wrapper --> */}

                {/* <!-- Page Content --> */}
                <div id="page-content-wrapper">

                    <div class="container-fluid px-lg-5">
                        {/* <!-- Mode Escuro para dispositivos mobile --> */}
                        <div class="row mx-auto mt-3 justify-content-center d-flex d-md-none">
                            <button type="button" class="btn btn-sm btn-toggle" data-toggle="button" aria-pressed="false" autocomplete="off" onclick="toggleDarkLight()">
                                <div class="handle"></div>
                            </button>
                            <p class="mb-0">Dark mode </p>
                        </div>
                        {/* <!-- Pesquisa mobile responsiva --> */}
                        <div class="input-group m-2 d-flex d-md-none mx-auto mt-4 w-100">
                            <input type="search" class="form-control" placeholder="Search information and modules in general" aria-label="Pesquise" aria-describedby="button-addon2" />
                        </div>

                        <div class="row py-3">
                            <div class="col-md-8">
                                <div class="home display fadeInUp" style="display: block">
                                    <div class="container">
                                        <div class="row my-3 my-md-5">
                                            <div class="card rounded-lg border-0 cards-short w-100">
                                                <div class="row">
                                                    <div class="col-sm-6 order-1 order-sm-1">
                                                        <h4 class="text-primary pt-3 pt-sm-5 pl-3 pl-lg-4 pr-3">Hi, welcome</h4>
                                                    </div>
                                                    <div class="col-sm-6 d-flex d-lg-block d-lg-block align-items-center justify-content-center order-0 order-sm-1">
                                                        <img src="https://gatoledo.com/proj-codepen/img/welcome-intranet.png" data-swap="https://gatoledo.com/proj-codepen/img/welcome-intranet-dark.png" id="welcome" class="img-fluid" style="margin-top: -25px;width: 75%;" />
                                                    </div>
                                                    <div class="col-12 order-2 order-sm-1">
                                                        <p class="px-3 pt-2 pb-3 text-banner" style="color: #5584bc; font-size: 15px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed metus quis mauris tempor lacinia. Etiam maximus arcu a erat dapibus tempus eget et justo. Nam eget iaculis arcu, eu aliquam risus.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row my-4 fadeInUp delay-1">
                                            <div class="tabs tabs-style-linemove homenews">
                                                <nav class="rounded-menu">
                                                    <ul style="max-width: 250px !important;margin: 0">
                                                        <li><a href="#section-linemove-5"><span>Highlight</span></a></li>
                                                        <li><a href="#section-linemove-4"><span>News</span></a></li>
                                                    </ul>
                                                </nav>
                                                <div class="content-wrap news mt-2 text-right">
                                                    <section id="section-linemove-5">
                                                        <a href="#" class="card-news shadow-card rounded-lg" >
                                                            <i class="lni lni-star-fill"></i>
                                                            <div class="text">
                                                                <h5 class="card-news-title pb-2">Itineraries</h5>
                                                                <span class="card-news-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed metus quis mauris tempor lacinia. Etiam maximus arcu a erat dapibus tempus eget et justo.
                                                                </span>
                                                            </div>
                                                        </a>
                                                        <a href="#" class="card-news shadow-card rounded-lg">
                                                            <i class="lni lni-star-fill"></i>
                                                            <div class="text">
                                                                <h5 class="card-news-title pb-2">Confraternization 2019</h5>
                                                                <span class="card-news-description">More customers, more complexity. Now what? Market smarter with our pre-built and custom segments. That’s what.
                                                                </span>
                                                            </div>
                                                        </a>
                                                    </section>
                                                    <section id="section-linemove-4">
                                                        <a href="#" class="card-news shadow-card rounded-lg">
                                                            <i class="lni lni-star-fill"></i>
                                                            <div class="text">
                                                                <h5 class="card-news-title pb-2">Registration open for MBA</h5>
                                                                <span class="card-news-description">More customers, more complexity. Now what? Market smarter with our pre-built and custom segments. That’s what.
                                                                </span>
                                                            </div>
                                                        </a>
                                                    </section>
                                                    <button class="btn-sm button-link blue-color mb-2" data-toggle="modal" data-target="#exampleModal"><i class="lni lni-plus pr-2"></i>Post news</button>
                                                </div>
                                                {/* <!-- /content --> */}
                                            </div>
                                            {/* <!-- Fim Grids --> */}
                                        </div>

                                        <div class="row mb-5 mt-2 fadeInUp delay-1">
                                            <div class="col-md-12 mt-4 mt-md-0">
                                                <div class="card shadow-card rounded-lg border-0 d-flex align-items-center justify-content-center p-4 fadeInUp">
                                                    <p class="text-center mb-3">Birthday</p>

                                                    <ul class="accordion-menu d-block d-sm-flex">
                                                        <li class="open li-style">
                                                            <div class="dropdownlink font-weight-bold"> Tody
                                                                <i class="lni-chevron-down" aria-hidden="true"></i>
                                                            </div>
                                                            <ul class="submenuItems">
                                                                <li><span>John Doe</span><span>Departamento de Relações Externas</span></li>
                                                                <li><span>John Doe</span><span>Departamento de Relações Externas</span></li>
                                                                <li><span>John Doe</span><span>Departamento de Relações Externas</span></li>
                                                            </ul>
                                                        </li>
                                                        <li class="open li-style">
                                                            <div class="dropdownlink"> Tomorrow
                                                                <i class="lni-chevron-down" aria-hidden="true"></i>
                                                            </div>
                                                            <ul class="submenuItems">
                                                                <li><span>John Doe</span><span>Departamento de Relações Externas</span></li>
                                                                <li><span>John Doe</span><span>Departamento de Relações Externas</span></li>
                                                                <li><span>John Doe</span><span>Departamento de Relações Externas</span></li>
                                                                <li><span>John Doe</span><span>Departamento de Relações Externas</span></li>
                                                                <li><span>John Doe</span><span>Departamento de Relações Externas</span></li>
                                                            </ul>
                                                        </li>
                                                        <li class="open li-style">
                                                            <div class="dropdownlink"> Yesterday
                                                                <i class="lni-chevron-down" aria-hidden="true"></i>
                                                            </div>
                                                            <ul class="submenuItems">
                                                                <li><span>John Doe</span><span>Departamento de Relações Externas</span></li>
                                                                <li><span>John Doe</span><span>Departamento de Relações Externas</span></li>
                                                                <li><span>John Doe</span><span>Departamento de Relações Externas</span></li>
                                                                <li><span>John Doe</span><span>Departamento de Relações Externas</span></li>
                                                                <li><span>John Doe</span><span>Departamento de Relações Externas</span></li>
                                                                <li><span>John Doe</span><span>Departamento de Relações Externas</span></li>
                                                                <li><span>John Doe</span><span>Departamento de Relações Externas</span></li>
                                                                <li><span>John Doe</span><span>Departamento de Relações Externas</span></li>
                                                            </ul>
                                                        </li>
                                                    </ul>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="acad display fadeInUp" style="display: none">
                                    <h3 class="mt-4">Study</h3>
                                    <div class="container">
                                        <div class="row mb-5">
                                            <p class="lead w-100">Options panel</p>
                                            {/* <!-- Pesquisa de itens do sistema --> */}
                                            <div class="input-group my-4 d-flex w-75">
                                                <input type="search" placeholder="Search by modules" autofocus class="animated-search-filter acad form-control" />
                                                <div class="input-group-append">

                                                </div>
                                            </div>

                                            <div class="animated-search-filter sysacad grid fadeInUp delay-1">

                                                <script>

                                                </script>

                                            </div>
                                            {/* <!-- Fim Grids --> */}
                                        </div>
                                    </div>
                                </div> 
                                {/* <!-- Controle de Display --> */}

                                <div class="adm display fadeInUp" style="display: none">
                                    <h3 class="mt-4">Businnes</h3>
                                    <div class="container">
                                        <div class="row mb-5">
                                            <p class="lead w-100">Options panel</p>
                                            {/* <!-- Pesquisa de itens do sistema --> */}
                                            <div class="input-group my-4 d-flex w-75">
                                                <input type="search" placeholder="Search by modules" autofocus class="animated-search-filter adm form-control"/>
                                            </div>

                                            <div class="animated-search-filter adm grid fadeInUp delay-1">

                                                <a href="intranet-antiga.html" class="card cards-func shadow-card rounded-lg border-0 d-flex justify-content-center">
                                                    <span class="text-primary font-weight-normal px-3 text-left">Envio de Mensagens</span>
                                                    <span class="arrow-card"></span>
                                                </a>
                                                <a href="envio-mensagens.html" class="card cards-func shadow-card rounded-lg border-0 d-flex justify-content-center">
                                                    <span class="text-primary font-weight-normal px-3 text-left">Envio de Mensagens do Portal - EMP</span>
                                                    <span class="arrow-card"></span>
                                                </a>
                                                <a href="#" class="card cards-func shadow-card rounded-lg border-0 d-flex justify-content-center">
                                                    <span class="text-primary font-weight-normal px-3 text-left">Bolsa de Estudos</span>
                                                    <span class="arrow-card"></span>
                                                </a>
                                                <a href="#" class="card cards-func shadow-card rounded-lg border-0 d-flex justify-content-center">
                                                    <span class="text-primary font-weight-normal px-3 text-left">Cesta Básica</span>
                                                    <span class="arrow-card"></span>
                                                </a>
                                                <a href="#" class="card cards-func shadow-card rounded-lg border-0 d-flex justify-content-center">
                                                    <span class="text-primary font-weight-normal px-3 text-left">Cobrança</span>
                                                    <span class="arrow-card"></span>
                                                </a>
                                                <a href="#" class="card cards-func shadow-card rounded-lg border-0 d-flex justify-content-center">
                                                    <span class="text-primary font-weight-normal px-3 text-left">Contabilidade</span>
                                                    <span class="arrow-card"></span>
                                                </a>
                                                <a href="#" class="card cards-func shadow-card rounded-lg border-0 d-flex justify-content-center">
                                                    <span class="text-primary font-weight-normal px-3 text-left">Controle de Ramais</span>
                                                    <span class="arrow-card"></span>
                                                </a>
                                                <a href="#" class="card cards-func shadow-card rounded-lg border-0 d-flex justify-content-center">
                                                    <span class="text-primary font-weight-normal px-3 text-left">Departamento Financeiro</span>
                                                    <span class="arrow-card"></span>
                                                </a>
                                                <a href="#" class="card cards-func shadow-card rounded-lg border-0 d-flex justify-content-center">
                                                    <span class="text-primary font-weight-normal px-3 text-left">Departamento Pessoal</span>
                                                    <span class="arrow-card"></span>
                                                </a>
                                                <a class="card cards-func shadow-card rounded-lg border-0 d-flex justify-content-center">
                                                    <span class="text-primary font-weight-normal px-3 text-left">Administração Patrimonial</span>
                                                    <span class="arrow-card"></span>
                                                </a>
                                                <a href="#" class="card cards-func shadow-card rounded-lg border-0 d-flex justify-content-center">
                                                    <span class="text-primary font-weight-normal px-3 text-left">Banco de Horas</span>
                                                    <span class="arrow-card"></span>
                                                </a>
                                                <a href="#" class="card cards-func shadow-card rounded-lg border-0 d-flex justify-content-center">
                                                    <span class="text-primary font-weight-normal px-3 text-left">FUNDACRED</span>
                                                    <span class="arrow-card"></span>
                                                </a>
                                                <a href="#" class="card cards-func shadow-card rounded-lg border-0 d-flex justify-content-center">
                                                    <span class="text-primary font-weight-normal px-3 text-left">Manuntenção de Contas de E-mail</span>
                                                    <span class="arrow-card"></span>
                                                </a>
                                                <a href="#" class="card cards-func shadow-card rounded-lg border-0 d-flex justify-content-center">
                                                    <span class="text-primary font-weight-normal px-3 text-left">Materiais</span>
                                                    <span class="arrow-card"></span>
                                                </a>
                                                <a href="#" class="card cards-func shadow-card rounded-lg border-0 d-flex justify-content-center">
                                                    <span class="text-primary font-weight-normal px-3 text-left">Museu Universitário</span>
                                                    <span class="arrow-card"></span>
                                                </a>
                                                <a href="#" class="card cards-func shadow-card rounded-lg border-0 d-flex justify-content-center">
                                                    <span class="text-primary font-weight-normal px-3 text-left">Nota Fiscal de Serviço (NFSe)</span>
                                                    <span class="arrow-card"></span>
                                                </a>
                                                <a href="#" class="card cards-func shadow-card rounded-lg border-0 d-flex justify-content-center">
                                                    <span class="text-primary font-weight-normal px-3 text-left">Pedido de Admissão</span>
                                                    <span class="arrow-card"></span>
                                                </a>
                                                <a href="#" class="card cards-func shadow-card rounded-lg border-0 d-flex justify-content-center">
                                                    <span class="text-primary font-weight-normal px-3 text-left">Processo Seletivo - Seleção de Colaboradores</span>
                                                    <span class="arrow-card"></span>
                                                </a>
                                                <a href="#" class="card cards-func shadow-card rounded-lg border-0 d-flex justify-content-center">
                                                    <span class="text-primary font-weight-normal px-3 text-left">Protocolo Geral</span>
                                                    <span class="arrow-card"></span>
                                                </a>
                                                <a href="#" class="card cards-func shadow-card rounded-lg border-0 d-flex justify-content-center">
                                                    <span class="text-primary font-weight-normal px-3 text-left">Solicitação de Conta</span>
                                                    <span class="arrow-card"></span>
                                                </a>
                                                <a href="#" class="card cards-func shadow-card rounded-lg border-0 d-flex justify-content-center">
                                                    <span class="text-primary font-weight-normal px-3 text-left">NTIC - SISTEMAS</span>
                                                    <span class="arrow-card"></span>
                                                </a>
                                                <a href="#" class="card cards-func shadow-card rounded-lg border-0 d-flex justify-content-center">
                                                    <span class="text-primary font-weight-normal px-3 text-left">Transporte</span>
                                                    <span class="arrow-card"></span>
                                                </a>

                                            </div>
                                            {/* <!-- Fim Grids --> */}
                                        </div>
                                    </div>
                                </div> 
                                {/* <!-- Controle de Display --> */}

                                <div class="beneficios display fadeInUp" style="display: none">
                                    <div class="container">
                                        <div class="row mb-5">
                                            <h3 class="my-4">Benefícios</h3>
                                            <div class="grid">
                                                <a href="#" class="card shadow-card rounded-lg border-0 d-flex align-items-center justify-content-center py-4 px-2 hover fadeInUp">
                                                    <img src="https://gatoledo.com/proj-codepen/svg/graduation-cap.svg" width="50px" />
                                                    <p class="text-primary text-center text-break pt-2"> Bolsas de Estudo</p>
                                                </a>
                                                <a href="#" class="card shadow-card rounded-lg border-0 d-flex align-items-center justify-content-center py-4 px-2 hover fadeInUp">
                                                    <img src="https://gatoledo.com/proj-codepen/svg/graduation-cap.svg" width="50px" />
                                                    <p class="text-primary text-center text-break pt-2"> Bolsa Capacitação</p>
                                                </a>
                                                <a href="#" class="card shadow-card rounded-lg border-0 d-flex align-items-center justify-content-center py-4 px-2 hover fadeInUp">
                                                    <img src="https://gatoledo.com/proj-codepen/svg/package.svg" width="50px" />
                                                    <p class="text-primary text-center text-break pt-2"> Cesta Básica</p>
                                                </a>
                                                <a href="#" class="card shadow-card rounded-lg border-0 d-flex align-items-center justify-content-center py-4 px-2 hover fadeInUp">
                                                    <img src="https://gatoledo.com/proj-codepen/svg/champagne.svg" width="50px" />
                                                    <p class="text-primary text-center text-break pt-2"> Confraternização</p>
                                                </a>
                                                <a href="#" class="card shadow-card rounded-lg border-0 d-flex align-items-center justify-content-center py-4 px-2 hover fadeInUp delay-1">
                                                    <img src="https://gatoledo.com/proj-codepen/svg/target.svg" width="50px" />
                                                    <p class="text-primary text-center text-break pt-2"> Pesquisa de Clima<br />Organizacional</p>
                                                </a>
                                                <a href="#" class="card shadow-card rounded-lg border-0 d-flex align-items-center justify-content-center py-4 px-2 hover fadeInUp delay-1">
                                                    <img src="https://gatoledo.com/proj-codepen/svg/bus-card.svg" width="50px" />
                                                    <p class="text-primary text-center text-break pt-2"> Vale transporte</p>
                                                </a>
                                                <a href="#" class="card shadow-card rounded-lg border-0 d-flex align-items-center justify-content-center py-4 px-2 hover fadeInUp delay-1">
                                                    <img src="https://gatoledo.com/proj-codepen/svg/bus.svg" width="50px" />
                                                    <p class="text-primary text-center text-break pt-2"> Ônibus/Itinerário</p>
                                                </a>
                                                <a href="#" class="card shadow-card rounded-lg border-0 d-flex align-items-center justify-content-center py-4 px-2 hover fadeInUp delay-1">
                                                    <img src="https://gatoledo.com/proj-codepen/svg/credit-card.svg" width="50px" />
                                                    <p class="text-primary text-center text-break pt-2"> Vale Refeição</p>
                                                </a>
                                                <a href="#" class="card shadow-card rounded-lg border-0 d-flex align-items-center justify-content-center py-4 px-2 hover fadeInUp delay-2">
                                                    <img src="https://gatoledo.com/proj-codepen/svg/doctor.svg" width="50px" />
                                                    <p class="text-primary text-center text-break pt-2"> Assistência Médica e<br />Odontológica</p>
                                                </a>
                                                <a href="#" class="card shadow-card rounded-lg border-0 d-flex align-items-center justify-content-center py-4 px-2 hover fadeInUp delay-2">
                                                    <img src="https://gatoledo.com/proj-codepen/svg/meeting.svg" width="50px" />
                                                    <p class="text-primary text-center text-break pt-2"> Convensão Coletiva de<br />Trabalho</p>
                                                </a>
                                                <a href="#" class="card shadow-card rounded-lg border-0 d-flex align-items-center justify-content-center py-4 px-2 hover fadeInUp delay-2">
                                                    <img src="https://gatoledo.com/proj-codepen/svg/handshake.svg" width="50px" />
                                                    <p class="text-primary text-center text-break pt-2"> Convênios</p>
                                                </a>
                                                <a href="#" class="card shadow-card rounded-lg border-0 d-flex align-items-center justify-content-center py-4 px-2 hover fadeInUp delay-2">
                                                    <img src="https://gatoledo.com/proj-codepen/svg/recruitment.svg" width="45px">
                                                        <p class="text-primary text-center text-break pt-2"> Processo Seletivo<br />Interno</p>
                                                </a>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Controle de Display --> */}

                                <div class="visoes display fadeInUp" style="display: none">
                                    <h3 class="mt-4">Documents</h3>
                                    <div class="container">
                                        <div class="row mb-5">
                                            <p class="lead w-100">Awaiting instructions for creating items in this area</p>
                                            <div class="animated-search-filter grid fadeInUp delay-1">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Controle de Display --> */}

                                <div class="info display fadeInUp" style="display: none">
                                    <h3 class="mt-4">Informações</h3>
                                    <div class="container">
                                        <div class="row mb-5">
                                            <p class="lead w-100">Options panel</p>

                                            <div class="animated-search-filter grid fadeInUp delay-1">

                                                <a href="#" class="card cards-func shadow-card rounded-lg border-0 d-flex justify-content-center">
                                                    <span class="text-primary font-weight-normal px-3 text-left">Calendário Acadêmico 2020 - Consulta</span>
                                                    <span class="arrow-card"></span>
                                                </a>
                                                <a href="#" class="card cards-func shadow-card rounded-lg border-0 d-flex justify-content-center">
                                                    <span class="text-primary font-weight-normal px-3 text-left">Conselho Universitário - CONSUN</span>
                                                    <span class="arrow-card"></span>
                                                </a>
                                                <a href="#" class="card cards-func shadow-card rounded-lg border-0 d-flex justify-content-center">
                                                    <span class="text-primary font-weight-normal px-3 text-left">Normas, Guias e Documentos</span>
                                                    <span class="arrow-card"></span>
                                                </a>
                                                <a href="#" class="card cards-func shadow-card rounded-lg border-0 d-flex justify-content-center">
                                                    <span class="text-primary font-weight-normal px-3 text-left">Ônibus - Itinerários</span>
                                                    <span class="arrow-card"></span>
                                                </a>
                                                <a href="#" class="card cards-func shadow-card rounded-lg border-0 d-flex justify-content-center">
                                                    <span class="text-primary font-weight-normal px-3 text-left">Ramais e E-mails</span>
                                                    <span class="arrow-card"></span>
                                                </a>
                                                <a href="#" class="card cards-func shadow-card rounded-lg border-0 d-flex justify-content-center">
                                                    <span class="text-primary font-weight-normal px-3 text-left">Sindicâncias</span>
                                                    <span class="arrow-card"></span>
                                                </a>
                                                <a href="#" class="card cards-func shadow-card rounded-lg border-0 d-flex justify-content-center">
                                                    <span class="text-primary font-weight-normal px-3 text-left">TI - Informações Gerais</span>
                                                    <span class="arrow-card"></span>
                                                </a>

                                            </div>
                                            {/* <!-- Fim Grids --> */}
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Controle de Display --> */}

                            </div>
                            {/* <!-- Fim Coluna 8 --> */}

                            <div class="col-md-4 fadeInUp atalhos">
                                <div class="row mx-auto mt-3 justify-content-center d-none d-md-flex">
                                    <button type="button" class="btn btn-sm btn-toggle" data-toggle="button" aria-pressed="false" autocomplete="off" onclick="toggleDarkLight()">
                                        <div class="handle"></div>
                                    </button>
                                    <p class="mb-0">Dark mode </p>
                                </div>

                                <div class="row">
                                    <div class="container mt-3">

                                        <div class="my-4 mt-md-0">
                                            <div class="card shadow-card rounded-lg border-0 d-flex align-items-center justify-content-center p-4">
                                                <p class="text-center mb-3">Jobs</p>
                                                <div class="w-100 text-center fadeInUp delay-2">
                                                    <a href="#" class="list-group-item list-group-item-action my-2 rounded-sm">Administrative assistant</a>
                                                    <a href="#" class="list-group-item list-group-item-action my-2 rounded-sm">Quality test</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="card shadow-card rounded-lg border-0 px-3 pb-4 mb-4">
                                            <p class="text-center mb-0 mt-3">My shortcuts</p>
                                            <p class="card-news-description text-center">To remove items, select them on the "x" and click remover</p>
                                            <div class="card-body block shortcuts">

                                                <div class="card border-0">
                                                    <a href="#" class="rounded-lg border-0 d-flex justify-content-center cards-short">
                                                        <span class="py-4 px-3 text-center">Lista de Ramais</span>
                                                    </a>
                                                    <span class="close-card"></span>
                                                </div>

                                                <div class="card border-0">
                                                    <a href="#" class="rounded-lg border-0 d-flex justify-content-center cards-short">
                                                        <span class="py-4 px-3 text-center">Envio de Mensagens</span>
                                                    </a>
                                                    <span class="close-card"></span>
                                                </div>

                                                <div class="card border-0">
                                                    <a href="#" class="rounded-lg border-0 d-flex justify-content-center cards-short">
                                                        <span class="py-4 px-3 text-center">Processo Seletivo Interno</span>
                                                    </a>
                                                    <span class="close-card"></span>
                                                </div>

                                                <div class="card border-0">
                                                    <a href="#" class="rounded-lg border-0 d-flex justify-content-center cards-short">
                                                        <span class="py-4 px-3 text-center">Cesta Básica</span>
                                                    </a>
                                                    <span class="close-card"></span>
                                                </div>

                                            </div>
                                            <div class="d-flex flex-wrap align-items-center justify-content-between">
                                                <button class="btn-sm button-link cyan-color mr-auto mt-2 remove"><i class="lni lni-close pr-2"></i>Remove</button>
                                                <button class="btn-sm button-link blue-color mt-2" data-toggle="modal" data-target="#exampleModalScrollable"><i class="lni lni-plus pr-2"></i>Add</button>
                                            </div>
                                        </div>
                                        <div class="row mb-5 mt-2 fadeInUp delay-2">
                                            <div class="col-md-12 mt-4 mt-md-0">
                                                <div class="card shadow-card rounded-lg border-0 d-flex align-items-center justify-content-center p-4 fadeInUp">
                                                    <p class="text-center mb-3">Contacts</p>

                                                    <div class="input-group m-2 d-flex">
                                                        <input type="search" class="form-control" placeholder="Localizar por Nome, RU, E-mail ou Departamento" aria-label="Pesquise" aria-describedby="button-addon2">
                                                    </div>

                                                    <div class="rounded ramal-box m-2 px-2 w-100" style="height: 280px; overflow-y: scroll">
                                                        <div class="contacts">
                                                            <div class="" unselectable="on"><b>John Doe</b> <br> <span class="text-primary">3343-7198</span><br> ASSESSORIA DE COMUNICAÇÃO <br>gabriel.toledo@codepen.io<br>
                                                            </div>
                                                                <input class="check" type="checkbox">
                                                                    <div class="heart"></div>
                                                                </input>
                                                            </div>
                                                                <div class="contacts">
                                                                    <div class="" unselectable="on"><b>John Doe</b> <br> <span class="text-primary">3343-7198</span><br> ASSESSORIA DE COMUNICAÇÃO <br>gabriel.toledo@codepen.io<br>
                                                                    </div>
                                                                        <input class="check" type="checkbox">
                                                                            <div class="heart"></div>
                                                                        </input>
                                                                    </div>
                                                                        <div class="contacts">
                                                                            <div class="" unselectable="on"><b>John Doe</b> <br> <span style="color:red">Ramal não cadastrado</span><br> ASSESSORIA DE COMUNICAÇÃO <br>gabriel.toledo@codepen.io<br>
                                                                            </div>
                                                                                <input class="check" type="checkbox">
                                                                                    <div class="heart"></div>
                                                                                </input>
                                                                            </div>
                                                                                <div class="contacts">
                                                                                    <div class="" unselectable="on"><b>John Doe</b> <br> <span class="text-primary">3343-7198</span><br> ASSESSORIA DE COMUNICAÇÃO <br>gabriel.toledo@codepen.io<br>
                                                                                    </div>
                                                                                        <input class="check" type="checkbox">
                                                                                            <div class="heart"></div>
                                                                                        </input>
                                                                                    </div>
                                                                                        <div class="contacts">
                                                                                            <div class="" unselectable="on"><b>John Doe</b> <br> <span style="color:red">Ramal não cadastrado</span><br> ASSESSORIA DE COMUNICAÇÃO <br>gabriel.toledo@codepen.io<br>
                                                                                            </div>
                                                                                                <input class="check" type="checkbox">
                                                                                                    <div class="heart"></div>
                                                                                                </input>
                                                                                            </div>
                                                                                            </div>

                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    </div>
                                                                                </div>

                                                                            </div>
                                                                            </div>

                                                                            {/* <!-- Assinatura de E-mail --> */}
                                                                            <div class="row assinatura display fadeInUp" style="display: none">
                                                                                <div class="col-md-12">

                                                                                </div>
                                                                            </div>
                                                                            {/* <!-- Controle de Display --> */}

                                                                        </div>
                                                                        <!-- Texto do rodapé -->
                                                                        <p style="bottom: 0;left: 0;right: 0;text-align: center;" class="text-secondary">Codepen</p>

                                                                    </div>
                                                                        {/* <!-- /#page-content-wrapper --> */}

                                                                        {/* <!-- iframe do sistema antigo --> */}
                                                                        <div class="d-none page-loader" id="page-content-frame">
                                                                            <div class="container-fluid fadeInUp delay-1 py-2">
                                                                                <div class="embed-responsive embed-responsive-4by3">
                                                                                    <iframe id="iframe" class="embed-responsive-item" src=""></iframe>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                    {/* <!-- /#wrapper --> */}

                                                                    {/* <!-- Modal ATALHOS --> */}
                                                                    <div class="modal fade" id="exampleModalScrollable" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
                                                                        <div class="modal-dialog modal-dialog-scrollable" role="document">
                                                                            <div class="modal-content">
                                                                                <div class="modal-header">
                                                                                    <h5 class="modal-title" id="exampleModalScrollableTitle">Adicionar atalhos</h5>
                                                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                                        <span aria-hidden="true">&times;</span>
                                                                                    </button>
                                                                                </div>
                                                                                <form class="form-short">
                                                                                    <div class="modal-body shortcuts" style="max-height: 30rem;">
                                                                                        <!-- Itens -->

                                                                                        <div class="card border-0">
                                                                                            <a href="#" class="rounded-lg border-0 d-flex justify-content-center cards-short--disable">
                                                                                                <span class="py-4 px-3 text-center">Contabilidade</span>
                                                                                            </a>
                                                                                            <span class="close-card transform-45"></span>
                                                                                        </div>
                                                                                        <div class="card border-0">
                                                                                            <a href="#" class="rounded-lg border-0 d-flex justify-content-center cards-short--disable">
                                                                                                <span class="py-4 px-3 text-center">Departamento Pessoal</span>
                                                                                            </a>
                                                                                            <span class="close-card transform-45"></span>
                                                                                        </div>
                                                                                        <div class="card border-0">
                                                                                            <a href="#" class="rounded-lg border-0 d-flex justify-content-center cards-short--disable">
                                                                                                <span class="py-4 px-3 text-center">Banco de Horas</span>
                                                                                            </a>
                                                                                            <span class="close-card transform-45"></span>
                                                                                        </div>
                                                                                        <div class="card border-0">
                                                                                            <a href="#" class="rounded-lg border-0 d-flex justify-content-center cards-short--disable">
                                                                                                <span class="py-4 px-3 text-center">Nota Fiscal de Serviço</span>
                                                                                            </a>
                                                                                            <span class="close-card transform-45"></span>
                                                                                        </div>
                                                                                        <div class="card border-0">
                                                                                            <a href="#" class="rounded-lg border-0 d-flex justify-content-center cards-short--disable">
                                                                                                <span class="py-4 px-3 text-center">Pedido de Admissão</span>
                                                                                            </a>
                                                                                            <span class="close-card transform-45"></span>
                                                                                        </div>
                                                                                        <div class="card border-0">
                                                                                            <a href="#" class="rounded-lg border-0 d-flex justify-content-center cards-short--disable">
                                                                                                <span class="py-4 px-3 text-center">Protocolo Geral</span>
                                                                                            </a>
                                                                                            <span class="close-card transform-45"></span>
                                                                                        </div>
                                                                                        <div class="card border-0">
                                                                                            <a href="#" class="rounded-lg border-0 d-flex justify-content-center cards-short--disable">
                                                                                                <span class="py-4 px-3 text-center">Transporte</span>
                                                                                            </a>
                                                                                            <span class="close-card transform-45"></span>
                                                                                        </div>
                                                                                        <div class="card border-0">
                                                                                            <a href="#" class="rounded-lg border-0 d-flex justify-content-center cards-short--disable">
                                                                                                <span class="py-4 px-3 text-center">Cobrança</span>
                                                                                            </a>
                                                                                            <span class="close-card transform-45"></span>
                                                                                        </div>
                                                                                        <div class="card border-0">
                                                                                            <a href="#" class="rounded-lg border-0 d-flex justify-content-center cards-short--disable">
                                                                                                <span class="py-4 px-3 text-center">Departamento Financeiro</span>
                                                                                            </a>
                                                                                            <span class="close-card transform-45"></span>
                                                                                        </div>
                                                                                        <div class="card border-0">
                                                                                            <a href="#" class="rounded-lg border-0 d-flex justify-content-center cards-short--disable">
                                                                                                <span class="py-4 px-3 text-center">Solicitação de Conta</span>
                                                                                            </a>
                                                                                            <span class="close-card transform-45"></span>
                                                                                        </div>
                                                                                        <div class="card border-0">
                                                                                            <a href="#" class="rounded-lg border-0 d-flex justify-content-center cards-short--disable">
                                                                                                <span class="py-4 px-3 text-center">Solicitação de Serviço de Informática</span>
                                                                                            </a>
                                                                                            <span class="close-card transform-45"></span>
                                                                                        </div>
                                                                                        <div class="card border-0">
                                                                                            <a href="#" class="rounded-lg border-0 d-flex justify-content-center cards-short--disable">
                                                                                                <span class="py-4 px-3 text-center">Sindicâncias</span>
                                                                                            </a>
                                                                                            <span class="close-card transform-45"></span>
                                                                                        </div>

                                                                                    </div>
                                                                                    <div class="modal-footer" style="justify-content: flex-start;">
                                                                                        <a class="btn-sm button-link cyan-color mr-auto" data-dismiss="modal"><i class="lni-close pr-2"></i>Fechar</a>
                                                                                        <a class="btn-sm button-link blue-color submit"><i class="lni-check-mark-circle pr-2"></i>Adicionar</a>
                                                                                    </div>
                                                                                </form>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <!-- Modal Adicionar comunicados -->
                                                                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                                        <div class="modal-dialog" role="document">
                                                                            <div class="modal-content">

                                                                                <div class="modal-header">
                                                                                    <h5 class="modal-title" id="exampleModalLabel">Publish</h5>
                                                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                                        <span aria-hidden="true">&times;</span>
                                                                                    </button>
                                                                                </div>
                                                                                <div class="modal-body">

                                                                                    <div aria-live="polite" aria-atomic="true" style="position: relative; min-height: 200px;">
                                                                                        <div class="toast" style="position: absolute; left: 0; right: 0;z-index: 10">
                                                                                            <div class="toast-header">
                                                                                                <strong class="mr-auto">Confirmar publicação</strong>
                                                                                                <small>Cancelar</small>
                                                                                                <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                                                                                                    <span aria-hidden="true">&times;</span>
                                                                                                </button>
                                                                                            </div>
                                                                                            <div class="toast-body">
                                                                                                Tem certeza que deseja publicar este comunicado/notícia?<br />
                                                                                                <a class="btn-sm button-link blue-color float-right mb-2 submit confirm"><i class="lni-check-mark-circle pr-2"></i>Publicar</a>
                                                                                            </div>
                                                                                        </div>

                                                                                        <form>
                                                                                            <div class="form-group">
                                                                                                <label for="recipient-name" class="col-form-label">Título da mensagem</label>
                                                                                                <input type="text" class="form-control" id="recipient-name" />
                                                                                            </div>
                                                                                            <div class="input-group mb-3">
                                                                                                <div class="input-group-prepend">
                                                                                                    <label class="input-group-text" for="inputGroupSelect01">Categoria</label>
                                                                                                </div>
                                                                                                <select class="custom-select" id="inputGroupSelect01">
                                                                                                    <option selected>Selecione...</option>
                                                                                                    <option value="1">Comunicados</option>
                                                                                                    <option value="2">Notícias</option>
                                                                                                </select>
                                                                                            </div>
                                                                                            <div class="form-group">
                                                                                                <label for="message-text" class="col-form-label">Comunicado (max 200 carac.)</label>
                                                                                                <textarea class="form-control" id="message-text" rows="5"></textarea>
                                                                                            </div>
                                                                                        </form>
                                                                                    </div>

                                                                                    <div class="modal-footer" style="justify-content: flex-start;">
                                                                                        <a class="btn-sm button-link cyan-color mr-auto" data-dismiss="modal"><i class="lni lni-close pr-2"></i>Close</a>
                                                                                        <a class="btn-sm button-link blue-color confirm"><i class="lni lni-plus pr-2"></i>Continue</a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                    );
}

                                                                    export default Welcm_user;