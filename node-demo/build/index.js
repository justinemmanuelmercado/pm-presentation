"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var body_parser_1 = __importDefault(require("body-parser"));
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var app = express_1.default();
var port = 3001;
app.use(cors_1.default());
app.use(body_parser_1.default.json());
app.get('/check', function (req, res) {
    res.send({
        status: 'up'
    });
});
app.listen(port, function () {
    console.log("Listening on port " + port);
});
