const getMain = async (req, res) => {
  res.render('home', {
    title: 'Correduría de Seguros en Granada'
  })
};

const getHogar = (req, res) => {
  res.render('hogar', {
    title: 'hogar',
  })
};

const getSalud = (req, res) => {
  res.render('salud', {
    title: 'salud'
  })
};

const getCoche = (req, res) => {
  res.render('coche', {
    title: 'coche'
  })
};

const getMoto = (req, res) => {
  res.render('moto', {
    title: 'moto'
  })
};

const getVida = (req, res) => {
  res.render('vida', {
    title: 'vida'
  })
};

const getEmpresas = (req, res) => {
  res.render('empresas', {
    title: 'empresas'
  })
};

const getDecesos = (req, res) => {
  res.render('decesos', {
    title: 'decesos'
  })
};

const getOtros = (req, res) => {
  res.render('otros', {
    title: 'otros'
  })
};

const getNosotros = async (req, res) => {
  res.render('nosotros', {
    title: 'nosotros',
  })
};

const getContacto = (req, res) => {
  res.render('contacto', {
    title: 'contacto'
  })
};

module.exports = {
  getMain,
  getNosotros,
  getSalud,
  getVida,
  getCoche,
  getMoto,
  getHogar,
  getDecesos,
  getEmpresas,
  getContacto,
  getOtros
};