(function testOne() {
    "use strict";
    var errMessage = '',
        successMessage = '',
        showError = function showError($errorHelper) {
            $errorHelper.removeClass('hide').html(errMessage);
        },
        hideError = function hideError($errorHelper) {
            $errorHelper.addClass('hide').empty();
            $(".has-error").removeClass('has-error');
            errMessage = '';
        },
        showSuccessMessage = function showSuccessMessage($successHolder) {
            $successHolder.removeClass('hide').html(successMessage);
        },
        hideSuccessMessage = function hideSuccessMessage($successHolder) {
            $successHolder.addClass('hide').empty();
            $(".has-success").removeClass('has-success');
            successMessage = '';
        },
        inArray = function (array, value) {
            return array.indexOf(value) !== -1;
        },
        testValidVariableNames = function testValidVariableNames() {
            var $el = $("#variableName"),
                selectedValues = $el.val(),
                $parent = $el.parent('.form-group'),
                hasError = false;
            if (inArray(selectedValues, "1Name")) {
                errMessage += "Variable names cannot begin with a number</br>";
                hasError = true;
            }
            if (!inArray(selectedValues, "$name")) {
                errMessage += "Variable names can start with a dollar sign or an underscore<br/>";
                hasError = true;
            }
            if (inArray(selectedValues, "name!")) {
                errMessage += "Only the dollar sign and the underscore can be used as special characters. <br/>";
                hasError = true;
            }
            if (inArray(selectedValues, "name?")) {
                errMessage += "Only the dollar sign and the underscore can be used as special characters. <br/>";
                hasError = true;
            }
            if (!inArray(selectedValues, "name_$")) {
                errMessage += 'The dollar sign and underscore are valid names<br/>';
                hasError = true;
            }
            if (hasError) {
                $parent.addClass('has-error');
            }
            if (!hasError) {
                successMessage += "You got the variable names correct!<br/>";
            }
        },
        testValidObjectNotation = function testValidObjectNotation() {
            var $el = $("#objectAccess"),
                sel = $el.val(),
                $parent = $el.parent('.form-group'),
                hasError = false;
            if (errMessage) {
                errMessage += "<hr>";
            }
            if (!inArray(sel, 'dotNotation')) {
                errMessage += "The dot notation will allow you to select a simple string<br/>";
                hasError = true;
            }
            if (inArray(sel, 'noQuotes')) {
                errMessage += "An unquoted square bracket means that there is a variable that contains the string needed.</br>";
                hasError = true;
            }
            if (!inArray(sel, 'quotes')) {
                errMessage += "A square bracket with single or double quotes will retrieve a key with that value <br/>";
                hasError = true;
            }
            if (hasError) {
                $parent.addClass('has-error');
            }
            if (!hasError) {
                successMessage += "You have the object notation correct!<br/>";
            }
        },
        checkStringIndex = function checkStringIndex() {
            var $el = $("#stringIndexOf"),
                stringVal = Number($el.val()),
                $parent = $el.parent(".form-group"),
                hasError;
            if (hasError = stringVal !== 1) {
                errMessage += 'Incorrect value for the index<br/>';
            }
            if (hasError) {
                $parent.addClass('has-error');
            }
            if (!hasError) {
                successMessage += "You have the correct value for the string<br/>";
            }
        },
        checkSplit = function checkSplit() {
            var $el = $("#stringSplit"),
                val = $el.val(),
                $parent = $el.parent('.form-group'),
                hasError;
            if (hasError = val !== 'split') {
                errMessage += "<hr>You have the incorrect value for turning a string to an array<br/>";
            }
            if (hasError) {
                $parent.addClass('has-error');
            }
            if (!hasError) {
                successMessage += "You have the correct answer for splitting a string<br/>";
            }
        },
        checkNumberMod = function checkNumberMod() {
            var $el = $("#numberMod"),
                stringVal = Number($el.val()),
                $parent = $el.parent(".form-group"),
                hasError;
            if (hasError = stringVal !== 1) {
                errMessage += 'Incorrect value for the modulus<br/>';
            }
            if (hasError) {
                $parent.addClass('has-error');
            }
            if (!hasError) {
                successMessage += "You have the correct value for the modulus operation<br/>";
            }
        },
        checkFloor = function checkFloor() {
            var $el = $("#numberFloor"),
                val = $el.val(),
                $parent = $el.parent('.form-group'),
                hasError;
            if (hasError = val !== 'floor') {
                errMessage += "<hr>You have the incorrect answer for converting 3.999 to 4<br/>";
            }
            if (hasError) {
                $parent.addClass('has-error');
            }
            if (!hasError) {
                successMessage += "You have the correct answer for rounding down.<br/>";
            }
        },
        showHideSuccessAndFail = function showHideSuccessAndFail($errorHolder, $successHolder) {
            if (errMessage) {
                showError($errorHolder);
            }
            if (successMessage) {
                showSuccessMessage($successHolder);
            }
        },
        hideAll = function hideAll($errorHolder, $successHolder) {
            hideError($errorHolder);
            hideSuccessMessage($successHolder);
        };

    $('#variableForm').on('submit', function (e) {
        e.preventDefault(); // prevent the form from submitting.
        var $errorHolder = $("#errorHolder"),
            $successHolder = $("#successHolder");
        hideAll($errorHolder, $successHolder);
        testValidVariableNames();
        testValidObjectNotation();
        showHideSuccessAndFail($errorHolder, $successHolder);
    });

    $("#stringForm").on('submit', function (e) {
        e.preventDefault();
        var $errorHolder = $("#errorHolderString"),
            $successHolder = $("#successHolderString");
        hideAll($errorHolder, $successHolder);
        checkStringIndex();
        checkSplit();
        showHideSuccessAndFail($errorHolder, $successHolder);
    });

    $("#numberForm").on('submit', function (e) {
        e.preventDefault();
        var $errorHolder = $("#errorHolderNumber"),
            $successHolder = $("#successHolderNumber");
        hideAll($errorHolder, $successHolder);
        checkNumberMod();
        checkFloor();
        showHideSuccessAndFail($errorHolder, $successHolder);
    });
}());
