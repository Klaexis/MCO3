const express = require("express");
const mongoose = require("mongoose");

const routes = require('./route.js');

const session = require('express-session');

mongoose.connect("mongodb://localhost/ArtGallery");