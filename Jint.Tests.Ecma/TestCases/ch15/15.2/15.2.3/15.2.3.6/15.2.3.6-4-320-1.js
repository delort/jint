/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-320-1.js
 * @description Object.defineProperty - 'O' is an Arguments object of a function that has formal parameters, 'P' is own data property of 'O', test TypeError is thrown when updating the [[Configurable]] attribute value of 'P' which is not configurable (10.6 [[DefineOwnProperty]] step 4)
 */


function testcase() {
        return (function (a, b, c) {
            Object.defineProperty(arguments, "genericProperty", {
                configurable: false
            });
            try {
                Object.defineProperty(arguments, "genericProperty", {
                    configurable: true
                });
            } catch (e) {
                return e instanceof TypeError &&
                    dataPropertyAttributesAreCorrect(arguments, "genericProperty", undefined, false, false, false);
            }
            return false;
        }(1, 2, 3));
    }
runTestCase(testcase);
