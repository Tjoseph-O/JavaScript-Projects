const {Account} = require("../intermediary/class.js");

test("Account class is not null", () => {
    let newAccount = new Account("Mariam klien", "mk@gmail.com", "07652743538");
    expect(newAccount).not.toBeNull();
});