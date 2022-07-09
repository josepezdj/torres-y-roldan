const webCtrl = require('../controller/webCtrl');
const {Router} = require('express');
const router = Router();

router.get('/', webCtrl.getMain);
router.get('/nosotros', webCtrl.getNosotros);
router.get('/salud', webCtrl.getSalud);
router.get('/hogar', webCtrl.getHogar);
router.get('/vida', webCtrl.getVida);
router.get('/coche', webCtrl.getCoche);
router.get('/moto', webCtrl.getMoto);
router.get('/decesos', webCtrl.getDecesos);
router.get('/empresas', webCtrl.getEmpresas);
router.get('/otros', webCtrl.getOtros);
router.get('/contacto', webCtrl.getContacto);

module.exports = router;