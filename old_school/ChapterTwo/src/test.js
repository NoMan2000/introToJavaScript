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
        checkPush = function checkPush() {
            var $el = $("#arrayPush"),
                val = $el.val(),
                $parent = $el.parent('.form-group'),
                hasError;
            if (hasError = val !== 'push') {
                errMessage += "<hr>You have the incorrect method for adding a value onto the end of an error<br/>";
            }
            if (hasError) {
                $parent.addClass('has-error');
            }
            if (!hasError) {
                successMessage += "You have the correct answer for adding an element to the end of an array.<br/>";
            }
        },
        checkShift = function checkShift() {
            var $el = $("#arrShift"),
                val = $el.val(),
                $parent = $el.parent('.form-group'),
                hasError;
            if (hasError = val !== 'Bill') {
                errMessage += "<hr>You have the incorrect answer for the shift method<br/>";
            }
            if (hasError) {
                $parent.addClass('has-error');
            }
            if (!hasError) {
                successMessage += "You have the correct answer for the shift method.<br/>";
            }
        },
        checkJoin = function checkJoin() {
            var $el = $("#arrJoin"),
                val = $el.val(),
                $parent = $el.parent('.form-group'),
                hasError;
            if (hasError = val !== 'Bill,brand,jim') {
                errMessage += "<hr>You have the incorrect answer for the join operation.  " +
                    "Remember there are no spaces added by the operation.<br/>";
            }
            if (hasError) {
                $parent.addClass('has-error');
            }
            if (!hasError) {
                successMessage += "You have the correct answer for the join method.<br/>";
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

    $('#arrayForm').on('submit', function (e) {
        e.preventDefault();
        var $errorHolder = $("#errorHolderArray"),
            $successHolder = $("#successHolderArray");
        hideAll($errorHolder, $successHolder);
        checkPush();
        checkShift();
        checkJoin();
        showHideSuccessAndFail($errorHolder, $successHolder);
    });

}());
