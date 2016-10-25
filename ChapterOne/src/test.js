(function testOne() {
    "use strict";
    var showError = function showError(message) {
            $("#errorHolder").removeClass('hide').html(message);
        },
        hideError = function hideError() {
            $("#errorHolder").addClass('hide').empty();
        },
        showSuccessMessage = function showSuccessMessage(message) {
            $("#successHolder").removeClass('hide').html(message);
        },
        hideSuccessMessage = function hideSuccessMessage() {
            $("#errorHolder").removeClass('hide').empty();
        },
        inArray = function (array, value) {
            return array.indexOf(value) !== -1;
        },
        testValidVariableNames = function testValidVariableNames() {

            var selectedValues = $("#variableName").val(),
                errMessage = '';
            if (inArray(selectedValues, "1Name")) {
                errMessage += "Variable names cannot begin with a number</br>";
            }
            if (!inArray(selectedValues, "$name")) {
                errMessage += "Variable names can start with a dollar sign or an underscore<br/>";
            }
            if (inArray(selectedValues, "name!")) {
                errMessage += "Only the dollar sign and the underscore can be used as special characters. <br/>";
            }
            if (inArray(selectedValues, "name?")) {
                errMessage += "Only the dollar sign and the underscore can be used as special characters. <br/>";
            }
            if (!inArray(selectedValues, "name_$")) {
                errMessage += 'The dollar sign and underscore are valid names<br/>';
            }
            if (errMessage) {
                return showError(errMessage);
            }
            return showSuccessMessage("You got the variable names correct!");
        };
    $('#variableForm').on('submit', function (e) {
        e.preventDefault(); // prevent the form from submitting.
        hideError();
        hideSuccessMessage();
        testValidVariableNames();
    });
}());
