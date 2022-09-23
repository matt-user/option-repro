contract;

use std::option::Option;

abi MyContract {
    fn test_function() -> Option<bool>;
}

impl MyContract for Contract {
    fn test_function() -> Option<bool> {
        Option::Some(true)
    }
}
