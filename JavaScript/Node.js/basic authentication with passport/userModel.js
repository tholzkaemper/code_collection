const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

let UserSchema = new Schema(
    {
        _id : {
            type: Schema.Types.ObjectId,
            auto: true
        },
        username: String,
        passwordHash: String
    }
);

UserSchema.methods.verifyPassword = function(password, callback) {
    bcyrpt.compare(password, this.passwordHash, function(err, res) {
        if (err) throw err;
        callback(err, res);
    });
}