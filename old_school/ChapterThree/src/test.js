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
        checkComparisonFalse = function checkComparisonFalse() {
            var el = document.getElementsByName('comparisonFalse'),
                $parent = $("#zTrue").parent('form-group'),
                values = [],
                hasError;
            for (var i = 0; i < el.length; i += 1) {
                if (el[i].checked) {
                    values.push(el[i].value);
                }
            }
            if (inArray(values, 'true')) {
                errMessage += "<hr>The value true is not correct after the comparison.<br/>";
                hasError = true;
            }
            if (inArray(values, 'undefined')) {
                errMessage += "<hr>The value true is not correct after the comparison.<br/>";
                hasError = true;
            }
            if (!inArray(values, 'false')) {
                errMessage += "<hr>The value false is correct for the comparison.<br/>";
                hasError = true;
            }

            if (hasError) {
                $parent.addClass('has-error');
            }
            if (!hasError) {
                successMessage += "You have the correct answer for the comparison.<br/>";
            }
        },
        orFalse = function orFalse() {
            var $el = $("#orFalse"),
                val = $el.val(),
                $parent = $el.parent('.form-group'),
                hasError;
            if (hasError = Number(val) !== 1) {
                errMessage += "<hr>You have the incorrect answer for the logical or operation.  Remember that JavaScript will coerce to false!<br/>";
            }
            if (hasError) {
                $parent.addClass('has-error');
            }
            if (!hasError) {
                successMessage += "You have the correct answer for the logical or operation.<br/>";
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

    $('#comparisonForm').on('submit', function (e) {
        e.preventDefault();
        var $errorHolder = $("#errorHolderArray"),
            $successHolder = $("#successHolderArray");
        hideAll($errorHolder, $successHolder);
        checkComparisonFalse();
        orFalse();
        showHideSuccessAndFail($errorHolder, $successHolder);
    });

}());
