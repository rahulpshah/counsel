angular.module('app.controllers', [])

    .controller('profileCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams) {


        }])

    .controller('mattersCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, Matters) {
            $scope.matters = Matters.items;

            // Accordion Code
            $scope.toggleMatter = function (matter) {
                if ($scope.isMatterShown(matter)) {
                    $scope.shownMatter = null;
                }
                else {
                    $scope.shownMatter = matter;
                }
            };
            $scope.isMatterShown = function (matter) {
                return $scope.shownMatter === matter;
            };
        })
    .controller('eventsCtrl',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName

        function ($scope, $stateParams, Events, EventTypes, $ionicModal) {
            $scope.events = Events.items;
            $scope.eventTypes = EventTypes.items;

            //Accordion Code
            $scope.toggleEvent = function (event) {
                if ($scope.isEventShown(event)) {
                    $scope.shownEvent = null;
                } else {
                    $scope.shownEvent = event;
                }
            };
            $scope.isEventShown = function (event) {

                return $scope.shownEvent === event;
            };
            $scope.convert = function (x) {
                var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
                d.setUTCSeconds(x);
                return d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear();
            }

            //code for data entry modal
            $scope.event = {
                assignee: '',
                due_date: '',
                end_date: '',
                priority: '',
                related_to_matter_id: '',
                remind_before: '',
                status: '',
                subject: '',
                type: ''
            };

            //modal to add events
            $ionicModal.fromTemplateUrl('templates/add_event.html', {
                scope: $scope,
                animation: 'slide-in-up'
            })
                .then(function (modal) {
                    $scope.modal = modal;
                });

            $scope.showModal = function () {
                $scope.modal.show();
            };

            $scope.closeModal = function () {
                $scope.event = '';
                $scope.modal.hide();
            };

            $scope.addEvent = function (event) {
                console.log("Event: "+ event);
                Events.addEvent(event);
                $scope.closeModal();
            }

        })

    .controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams) {


        }])

    .controller('matterCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams) {

            var matter_name = $stateParams.item;
            //console.log(matter_name);
            $scope.matter_name = matter_name;

        })

    .controller('noteCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, Matters) {

            $scope.matter = Matters.items.$loaded().then(function(data){
                    $scope.item = data.$getRecord($stateParams.item);
                    $scope.notes = $scope.item.notes;
            });
        })
