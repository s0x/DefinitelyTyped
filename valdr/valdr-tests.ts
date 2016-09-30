﻿/// <reference path="valdr.d.ts" />

function ValdrTests() {
    var valdr: valdr.Valdr;
    var validation = valdr.validate('person', 'lastName', 'test');
    var isValid = validation.valid;
    var violations = validation.violations;
    violations.forEach(function(violation) {
        var valid = violation.valid;
        var value = violation.value;
        var field = violation.field;
        var type = violation.type;
        var validator = violation.validator;
        var message = violation.message;
	});
    var results = validation.validationResults;
    results.forEach(function(violation) {
        var valid = violation.valid;
        var value = violation.value;
        var field = violation.field;
        var type = violation.type;
        var validator = violation.validator;
        var message = violation.message;
    });
    valdr.addConstraints({
        'person': {
            'lastName': {
                'required': {
                    'message': 'Last name is required.'
                }
            }
        }
    });
    valdr.removeConstraints('person');
    var constraints = valdr.getConstraints();
    var constraintTypeName = constraints["person"];
    var constraintFieldName = constraintTypeName["lastName"];
    var constraintValidatorName = constraintFieldName["test"];
    var validationMessage = constraintValidatorName.message;
    valdr.setClasses({
        valid: 'demo-is-valid',
        invalid: 'demo-is-invalid'
    });
}

function ValdrProviderTests() {
    var valdrProvider: valdr.ValdrProvider;
    valdrProvider.addConstraints({
        'person': {
            'lastName': {
                'required': {
                    'message': 'Last name is required.'
                }
            }
        }
    });
    valdrProvider.removeConstraints('person');
    valdrProvider.setConstraintUrl('/api/constraints');
    valdrProvider.addValidator('customValidator');
    valdrProvider.addConstraintAlias('customValidator', 'customValidatorAlias');
}
