angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('quizSlayer', {
    url: '/page3',
    templateUrl: 'templates/quizSlayer.html',
    controller: 'quizSlayerCtrl'
  })

  .state('vitRia', {
    url: '/page23',
    templateUrl: 'templates/vitRia.html',
    controller: 'vitRiaCtrl'
  })

  .state('failed', {
    url: '/page25',
    templateUrl: 'templates/failed.html',
    controller: 'failedCtrl'
  })

  .state('sobre', {
    url: '/page13',
    templateUrl: 'templates/sobre.html',
    controller: 'sobreCtrl'
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('1Geografia', {
    url: '/page4',
    templateUrl: 'templates/1Geografia.html',
    controller: '1GeografiaCtrl'
  })

  .state('2MatemTica', {
    url: '/page5',
    templateUrl: 'templates/2MatemTica.html',
    controller: '2MatemTicaCtrl'
  })

  .state('3Biologia', {
    url: '/page6',
    templateUrl: 'templates/3Biologia.html',
    controller: '3BiologiaCtrl'
  })

  .state('4HistRia', {
    url: '/page7',
    templateUrl: 'templates/4HistRia.html',
    controller: '4HistRiaCtrl'
  })

  .state('5Geografia', {
    url: '/page9',
    templateUrl: 'templates/5Geografia.html',
    controller: '5GeografiaCtrl'
  })

  .state('6HistRia', {
    url: '/page11',
    templateUrl: 'templates/6HistRia.html',
    controller: '6HistRiaCtrl'
  })

  .state('7Geografia', {
    url: '/page10',
    templateUrl: 'templates/7Geografia.html',
    controller: '7GeografiaCtrl'
  })

  .state('8MatemTica', {
    url: '/page30',
    templateUrl: 'templates/8MatemTica.html',
    controller: '8MatemTicaCtrl'
  })

  .state('9Enigma', {
    url: '/page14',
    templateUrl: 'templates/9Enigma.html',
    controller: '9EnigmaCtrl'
  })

  .state('10Biologia', {
    url: '/page15',
    templateUrl: 'templates/10Biologia.html',
    controller: '10BiologiaCtrl'
  })

  .state('11MatemTica', {
    url: '/page16',
    templateUrl: 'templates/11MatemTica.html',
    controller: '11MatemTicaCtrl'
  })

  .state('12Enigma', {
    url: '/page17',
    templateUrl: 'templates/12Enigma.html',
    controller: '12EnigmaCtrl'
  })

  .state('13Geografia', {
    url: '/page18',
    templateUrl: 'templates/13Geografia.html',
    controller: '13GeografiaCtrl'
  })

  .state('14MatemTica', {
    url: '/page19',
    templateUrl: 'templates/14MatemTica.html',
    controller: '14MatemTicaCtrl'
  })

  .state('15PortuguS', {
    url: '/page20',
    templateUrl: 'templates/15PortuguS.html',
    controller: '15PortuguSCtrl'
  })

  .state('16QuMica', {
    url: '/page21',
    templateUrl: 'templates/16QuMica.html',
    controller: '16QuMicaCtrl'
  })

  .state('17Astrologia', {
    url: '/page22',
    templateUrl: 'templates/17Astrologia.html',
    controller: '17AstrologiaCtrl'
  })

  .state('18MatemTica', {
    url: '/page27',
    templateUrl: 'templates/18MatemTica.html',
    controller: '18MatemTicaCtrl'
  })

  .state('19Geometria', {
    url: '/page26',
    templateUrl: 'templates/19Geometria.html',
    controller: '19GeometriaCtrl'
  })

  .state('20HistRia', {
    url: '/page24',
    templateUrl: 'templates/20HistRia.html',
    controller: '20HistRiaCtrl'
  })

  .state('21ConhecimentosGerais', {
    url: '/page28',
    templateUrl: 'templates/21ConhecimentosGerais.html',
    controller: '21ConhecimentosGeraisCtrl'
  })

  .state('22Astrologia', {
    url: '/page12',
    templateUrl: 'templates/22Astrologia.html',
    controller: '22AstrologiaCtrl'
  })

  .state('23Anagrama', {
    url: '/page33',
    templateUrl: 'templates/23Anagrama.html',
    controller: '23AnagramaCtrl'
  })

  .state('24HistRia', {
    url: '/page31',
    templateUrl: 'templates/24HistRia.html',
    controller: '24HistRiaCtrl'
  })

  .state('25MatemTica', {
    url: '/page32',
    templateUrl: 'templates/25MatemTica.html',
    controller: '25MatemTicaCtrl'
  })

  .state('26Geografia', {
    url: '/page29',
    templateUrl: 'templates/26Geografia.html',
    controller: '26GeografiaCtrl'
  })

  .state('27MatemTica', {
    url: '/page34',
    templateUrl: 'templates/27MatemTica.html',
    controller: '27MatemTicaCtrl'
  })

  .state('28Enigma', {
    url: '/page35',
    templateUrl: 'templates/28Enigma.html',
    controller: '28EnigmaCtrl'
  })

  .state('29Geografia', {
    url: '/page37',
    templateUrl: 'templates/29Geografia.html',
    controller: '29GeografiaCtrl'
  })

  .state('30HistRia', {
    url: '/page38',
    templateUrl: 'templates/30HistRia.html',
    controller: '30HistRiaCtrl'
  })

$urlRouterProvider.otherwise('/page3')


});