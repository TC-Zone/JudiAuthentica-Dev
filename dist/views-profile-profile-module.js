(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-profile-profile-module"],{

/***/ "./node_modules/ng2-charts/ng2-charts.js":
/*!***********************************************!*\
  !*** ./node_modules/ng2-charts/ng2-charts.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(/*! ./index */ "./node_modules/ng2-charts/index.js"));


/***/ }),

/***/ "./node_modules/ng2-file-upload/ng2-file-upload.js":
/*!*********************************************************!*\
  !*** ./node_modules/ng2-file-upload/ng2-file-upload.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(/*! ./index */ "./node_modules/ng2-file-upload/index.js"));


/***/ }),

/***/ "./node_modules/ngx-image-cropper/fesm5/ngx-image-cropper.js":
/*!*******************************************************************!*\
  !*** ./node_modules/ngx-image-cropper/fesm5/ngx-image-cropper.js ***!
  \*******************************************************************/
/*! exports provided: ImageCropperModule, ImageCropperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCropperModule", function() { return ImageCropperModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCropperComponent", function() { return ImageCropperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @param {?} srcBase64
 * @return {?}
 */
function resetExifOrientation(srcBase64) {
    try {
        /** @type {?} */
        var exifRotation = getExifRotation(srcBase64);
        if (exifRotation > 1) {
            return transformBase64BasedOnExifRotation(srcBase64, exifRotation);
        }
        else {
            return Promise.resolve(srcBase64);
        }
    }
    catch (ex) {
        return Promise.reject(ex);
    }
}
/**
 * @param {?} srcBase64
 * @param {?} exifRotation
 * @return {?}
 */
function transformBase64BasedOnExifRotation(srcBase64, exifRotation) {
    return new Promise(function (resolve, reject) {
        /** @type {?} */
        var img = new Image();
        img.onload = function () {
            /** @type {?} */
            var width = img.width;
            /** @type {?} */
            var height = img.height;
            /** @type {?} */
            var canvas = document.createElement('canvas');
            /** @type {?} */
            var ctx = canvas.getContext('2d');
            if (ctx) {
                if (4 < exifRotation && exifRotation < 9) {
                    canvas.width = height;
                    canvas.height = width;
                }
                else {
                    canvas.width = width;
                    canvas.height = height;
                }
                transformCanvas(ctx, exifRotation, width, height);
                ctx.drawImage(img, 0, 0);
                resolve(canvas.toDataURL());
            }
            else {
                reject(new Error('No context'));
            }
        };
        img.src = srcBase64;
    });
}
/**
 * @param {?} imageBase64
 * @return {?}
 */
function getExifRotation(imageBase64) {
    /** @type {?} */
    var view = new DataView(base64ToArrayBuffer(imageBase64));
    if (view.getUint16(0, false) != 0xFFD8) {
        return -2;
    }
    /** @type {?} */
    var length = view.byteLength;
    /** @type {?} */
    var offset = 2;
    while (offset < length) {
        if (view.getUint16(offset + 2, false) <= 8)
            return -1;
        /** @type {?} */
        var marker = view.getUint16(offset, false);
        offset += 2;
        if (marker == 0xFFE1) {
            if (view.getUint32(offset += 2, false) != 0x45786966) {
                return -1;
            }
            /** @type {?} */
            var little = view.getUint16(offset += 6, false) == 0x4949;
            offset += view.getUint32(offset + 4, little);
            /** @type {?} */
            var tags = view.getUint16(offset, little);
            offset += 2;
            for (var i = 0; i < tags; i++) {
                if (view.getUint16(offset + (i * 12), little) == 0x0112) {
                    return view.getUint16(offset + (i * 12) + 8, little);
                }
            }
        }
        else if ((marker & 0xFF00) != 0xFF00) {
            break;
        }
        else {
            offset += view.getUint16(offset, false);
        }
    }
    return -1;
}
/**
 * @param {?} imageBase64
 * @return {?}
 */
function base64ToArrayBuffer(imageBase64) {
    imageBase64 = imageBase64.replace(/^data\:([^\;]+)\;base64,/gmi, '');
    /** @type {?} */
    var binaryString = atob(imageBase64);
    /** @type {?} */
    var len = binaryString.length;
    /** @type {?} */
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
}
/**
 * @param {?} ctx
 * @param {?} orientation
 * @param {?} width
 * @param {?} height
 * @return {?}
 */
function transformCanvas(ctx, orientation, width, height) {
    switch (orientation) {
        case 2:
            ctx.transform(-1, 0, 0, 1, width, 0);
            break;
        case 3:
            ctx.transform(-1, 0, 0, -1, width, height);
            break;
        case 4:
            ctx.transform(1, 0, 0, -1, 0, height);
            break;
        case 5:
            ctx.transform(0, 1, 1, 0, 0, 0);
            break;
        case 6:
            ctx.transform(0, 1, -1, 0, height, 0);
            break;
        case 7:
            ctx.transform(0, -1, -1, 0, height, width);
            break;
        case 8:
            ctx.transform(0, -1, 1, 0, 0, width);
            break;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Hermite resize - fast image resize/resample using Hermite filter.
 * https://github.com/viliusle/Hermite-resize
 */
/**
 * @param {?} canvas
 * @param {?} width
 * @param {?} height
 * @param {?=} resizeCanvas
 * @return {?}
 */
function resizeCanvas(canvas, width, height, resizeCanvas) {
    if (resizeCanvas === void 0) { resizeCanvas = true; }
    /** @type {?} */
    var width_source = canvas.width;
    /** @type {?} */
    var height_source = canvas.height;
    width = Math.round(width);
    height = Math.round(height);
    /** @type {?} */
    var ratio_w = width_source / width;
    /** @type {?} */
    var ratio_h = height_source / height;
    /** @type {?} */
    var ratio_w_half = Math.ceil(ratio_w / 2);
    /** @type {?} */
    var ratio_h_half = Math.ceil(ratio_h / 2);
    /** @type {?} */
    var ctx = canvas.getContext('2d');
    if (ctx) {
        /** @type {?} */
        var img = ctx.getImageData(0, 0, width_source, height_source);
        /** @type {?} */
        var img2 = ctx.createImageData(width, height);
        /** @type {?} */
        var data = img.data;
        /** @type {?} */
        var data2 = img2.data;
        for (var j = 0; j < height; j++) {
            for (var i = 0; i < width; i++) {
                /** @type {?} */
                var x2 = (i + j * width) * 4;
                /** @type {?} */
                var center_y = j * ratio_h;
                /** @type {?} */
                var weight = 0;
                /** @type {?} */
                var weights = 0;
                /** @type {?} */
                var weights_alpha = 0;
                /** @type {?} */
                var gx_r = 0;
                /** @type {?} */
                var gx_g = 0;
                /** @type {?} */
                var gx_b = 0;
                /** @type {?} */
                var gx_a = 0;
                /** @type {?} */
                var xx_start = Math.floor(i * ratio_w);
                /** @type {?} */
                var yy_start = Math.floor(j * ratio_h);
                /** @type {?} */
                var xx_stop = Math.ceil((i + 1) * ratio_w);
                /** @type {?} */
                var yy_stop = Math.ceil((j + 1) * ratio_h);
                xx_stop = Math.min(xx_stop, width_source);
                yy_stop = Math.min(yy_stop, height_source);
                for (var yy = yy_start; yy < yy_stop; yy++) {
                    /** @type {?} */
                    var dy = Math.abs(center_y - yy) / ratio_h_half;
                    /** @type {?} */
                    var center_x = i * ratio_w;
                    /** @type {?} */
                    var w0 = dy * dy; //pre-calc part of w
                    for (var xx = xx_start; xx < xx_stop; xx++) {
                        /** @type {?} */
                        var dx = Math.abs(center_x - xx) / ratio_w_half;
                        /** @type {?} */
                        var w = Math.sqrt(w0 + dx * dx);
                        if (w >= 1) {
                            //pixel too far
                            continue;
                        }
                        //hermite filter
                        weight = 2 * w * w * w - 3 * w * w + 1;
                        /** @type {?} */
                        var pos_x = 4 * (xx + yy * width_source);
                        //alpha
                        gx_a += weight * data[pos_x + 3];
                        weights_alpha += weight;
                        //colors
                        if (data[pos_x + 3] < 255)
                            weight = weight * data[pos_x + 3] / 250;
                        gx_r += weight * data[pos_x];
                        gx_g += weight * data[pos_x + 1];
                        gx_b += weight * data[pos_x + 2];
                        weights += weight;
                    }
                }
                data2[x2] = gx_r / weights;
                data2[x2 + 1] = gx_g / weights;
                data2[x2 + 2] = gx_b / weights;
                data2[x2 + 3] = gx_a / weights_alpha;
            }
        }
        //clear and resize canvas
        if (resizeCanvas) {
            canvas.width = width;
            canvas.height = height;
        }
        else {
            ctx.clearRect(0, 0, width_source, height_source);
        }
        //draw
        ctx.putImageData(img2, 0, 0);
    }
}
/**
 * @param {?} srcBase64
 * @param {?} aspectRatio
 * @return {?}
 */
function fitImageToAspectRatio(srcBase64, aspectRatio) {
    return new Promise(function (resolve, reject) {
        /** @type {?} */
        var img = new Image();
        img.onload = function () {
            /** @type {?} */
            var canvas = document.createElement('canvas');
            /** @type {?} */
            var ctx = canvas.getContext('2d');
            if (ctx) {
                /** @type {?} */
                var minWidthToContain = img.height * aspectRatio;
                /** @type {?} */
                var minHeightToContain = img.width / aspectRatio;
                canvas.width = Math.max(img.width, minWidthToContain);
                canvas.height = Math.max(img.height, minHeightToContain);
                /** @type {?} */
                var dx = (canvas.width - img.width) / 2;
                /** @type {?} */
                var dy = (canvas.height - img.height) / 2;
                ctx.drawImage(img, dx, dy);
                resolve(canvas.toDataURL());
            }
            else {
                reject(new Error('No context'));
            }
        };
        img.src = srcBase64;
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ImageCropperComponent = /** @class */ (function () {
    function ImageCropperComponent(sanitizer, cd, zone) {
        this.sanitizer = sanitizer;
        this.cd = cd;
        this.zone = zone;
        this.setImageMaxSizeRetries = 0;
        this.cropperScaledMinWidth = 20;
        this.cropperScaledMinHeight = 20;
        this.marginLeft = '0px';
        this.imageVisible = false;
        this.format = 'png';
        this.outputType = 'both';
        this.maintainAspectRatio = true;
        this.aspectRatio = 1;
        this.resizeToWidth = 0;
        this.resizeToHeight = 0;
        this.cropperMinWidth = 0;
        this.cropperMinHeight = 0;
        this.roundCropper = false;
        this.onlyScaleDown = false;
        this.imageQuality = 92;
        this.autoCrop = true;
        this.containWithinAspectRatio = false;
        this.cropper = {
            x1: -100,
            y1: -100,
            x2: 10000,
            y2: 10000
        };
        this.alignImage = 'center';
        this.startCropImage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.imageCropped = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.imageCroppedBase64 = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.imageCroppedFile = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.imageLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.cropperReady = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.loadImageFailed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.initCropper();
    }
    Object.defineProperty(ImageCropperComponent.prototype, "imageFileChanged", {
        set: /**
         * @param {?} file
         * @return {?}
         */
        function (file) {
            this.initCropper();
            if (file) {
                this.loadImageFile(file);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageCropperComponent.prototype, "imageChangedEvent", {
        set: /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            this.initCropper();
            if (event && event.target && event.target.files && event.target.files.length > 0) {
                this.loadImageFile(event.target.files[0]);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageCropperComponent.prototype, "imageBase64", {
        set: /**
         * @param {?} imageBase64
         * @return {?}
         */
        function (imageBase64) {
            this.initCropper();
            this.checkExifAndLoadBase64Image(imageBase64);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    ImageCropperComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["cropper"]) {
            this.setMaxSize();
            this.setCropperScaledMinSize();
            this.checkCropperPosition(false);
            this.doAutoCrop();
            this.cd.markForCheck();
        }
        if (changes["aspectRatio"] && this.imageVisible) {
            this.resetCropperPosition();
        }
    };
    /**
     * @return {?}
     */
    ImageCropperComponent.prototype.initCropper = /**
     * @return {?}
     */
    function () {
        this.imageVisible = false;
        this.originalImage = null;
        this.safeImgDataUrl = 'data:image/png;base64,iVBORw0KGg'
            + 'oAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAU'
            + 'AAarVyFEAAAAASUVORK5CYII=';
        this.moveStart = {
            active: false,
            type: null,
            position: null,
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0,
            clientX: 0,
            clientY: 0
        };
        this.maxSize = {
            width: 0,
            height: 0
        };
        this.originalSize = {
            width: 0,
            height: 0
        };
        this.cropper.x1 = -100;
        this.cropper.y1 = -100;
        this.cropper.x2 = 10000;
        this.cropper.y2 = 10000;
    };
    /**
     * @param {?} file
     * @return {?}
     */
    ImageCropperComponent.prototype.loadImageFile = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        var _this = this;
        /** @type {?} */
        var fileReader = new FileReader();
        fileReader.onload = function (event) {
            /** @type {?} */
            var imageType = file.type;
            if (_this.isValidImageType(imageType)) {
                _this.checkExifAndLoadBase64Image(event.target.result);
            }
            else {
                _this.loadImageFailed.emit();
            }
        };
        fileReader.readAsDataURL(file);
    };
    /**
     * @param {?} type
     * @return {?}
     */
    ImageCropperComponent.prototype.isValidImageType = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        return /image\/(png|jpg|jpeg|bmp|gif|tiff)/.test(type);
    };
    /**
     * @param {?} imageBase64
     * @return {?}
     */
    ImageCropperComponent.prototype.checkExifAndLoadBase64Image = /**
     * @param {?} imageBase64
     * @return {?}
     */
    function (imageBase64) {
        var _this = this;
        resetExifOrientation(imageBase64)
            .then(function (resultBase64) { return _this.fitImageToAspectRatio(resultBase64); })
            .then(function (resultBase64) { return _this.loadBase64Image(resultBase64); })
            .catch(function () { return _this.loadImageFailed.emit(); });
    };
    /**
     * @param {?} imageBase64
     * @return {?}
     */
    ImageCropperComponent.prototype.fitImageToAspectRatio = /**
     * @param {?} imageBase64
     * @return {?}
     */
    function (imageBase64) {
        return this.containWithinAspectRatio
            ? fitImageToAspectRatio(imageBase64, this.aspectRatio)
            : Promise.resolve(imageBase64);
    };
    /**
     * @param {?} imageBase64
     * @return {?}
     */
    ImageCropperComponent.prototype.loadBase64Image = /**
     * @param {?} imageBase64
     * @return {?}
     */
    function (imageBase64) {
        var _this = this;
        this.originalBase64 = imageBase64;
        this.safeImgDataUrl = this.sanitizer.bypassSecurityTrustResourceUrl(imageBase64);
        this.originalImage = new Image();
        this.originalImage.onload = function () {
            _this.originalSize.width = _this.originalImage.width;
            _this.originalSize.height = _this.originalImage.height;
            _this.cd.markForCheck();
        };
        this.originalImage.src = imageBase64;
    };
    /**
     * @return {?}
     */
    ImageCropperComponent.prototype.imageLoadedInView = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.originalImage != null) {
            this.imageLoaded.emit();
            this.setImageMaxSizeRetries = 0;
            setTimeout(function () { return _this.checkImageMaxSizeRecursively(); });
        }
    };
    /**
     * @return {?}
     */
    ImageCropperComponent.prototype.checkImageMaxSizeRecursively = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.setImageMaxSizeRetries > 40) {
            this.loadImageFailed.emit();
        }
        else if (this.sourceImage && this.sourceImage.nativeElement && this.sourceImage.nativeElement.offsetWidth > 0) {
            this.setMaxSize();
            this.setCropperScaledMinSize();
            this.resetCropperPosition();
            this.cropperReady.emit();
            this.cd.markForCheck();
        }
        else {
            this.setImageMaxSizeRetries++;
            setTimeout(function () {
                _this.checkImageMaxSizeRecursively();
            }, 50);
        }
    };
    /**
     * @return {?}
     */
    ImageCropperComponent.prototype.onResize = /**
     * @return {?}
     */
    function () {
        this.resizeCropperPosition();
        this.setMaxSize();
        this.setCropperScaledMinSize();
    };
    /**
     * @return {?}
     */
    ImageCropperComponent.prototype.rotateLeft = /**
     * @return {?}
     */
    function () {
        this.transformBase64(8);
    };
    /**
     * @return {?}
     */
    ImageCropperComponent.prototype.rotateRight = /**
     * @return {?}
     */
    function () {
        this.transformBase64(6);
    };
    /**
     * @return {?}
     */
    ImageCropperComponent.prototype.flipHorizontal = /**
     * @return {?}
     */
    function () {
        this.transformBase64(2);
    };
    /**
     * @return {?}
     */
    ImageCropperComponent.prototype.flipVertical = /**
     * @return {?}
     */
    function () {
        this.transformBase64(4);
    };
    /**
     * @param {?} exifOrientation
     * @return {?}
     */
    ImageCropperComponent.prototype.transformBase64 = /**
     * @param {?} exifOrientation
     * @return {?}
     */
    function (exifOrientation) {
        var _this = this;
        if (this.originalBase64) {
            transformBase64BasedOnExifRotation(this.originalBase64, exifOrientation)
                .then(function (resultBase64) { return _this.fitImageToAspectRatio(resultBase64); })
                .then(function (rotatedBase64) { return _this.loadBase64Image(rotatedBase64); });
        }
    };
    /**
     * @return {?}
     */
    ImageCropperComponent.prototype.resizeCropperPosition = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var sourceImageElement = this.sourceImage.nativeElement;
        if (this.maxSize.width !== sourceImageElement.offsetWidth || this.maxSize.height !== sourceImageElement.offsetHeight) {
            this.cropper.x1 = this.cropper.x1 * sourceImageElement.offsetWidth / this.maxSize.width;
            this.cropper.x2 = this.cropper.x2 * sourceImageElement.offsetWidth / this.maxSize.width;
            this.cropper.y1 = this.cropper.y1 * sourceImageElement.offsetHeight / this.maxSize.height;
            this.cropper.y2 = this.cropper.y2 * sourceImageElement.offsetHeight / this.maxSize.height;
        }
    };
    /**
     * @return {?}
     */
    ImageCropperComponent.prototype.resetCropperPosition = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var sourceImageElement = this.sourceImage.nativeElement;
        if (!this.maintainAspectRatio) {
            this.cropper.x1 = 0;
            this.cropper.x2 = sourceImageElement.offsetWidth;
            this.cropper.y1 = 0;
            this.cropper.y2 = sourceImageElement.offsetHeight;
        }
        else if (sourceImageElement.offsetWidth / this.aspectRatio < sourceImageElement.offsetHeight) {
            this.cropper.x1 = 0;
            this.cropper.x2 = sourceImageElement.offsetWidth;
            /** @type {?} */
            var cropperHeight = sourceImageElement.offsetWidth / this.aspectRatio;
            this.cropper.y1 = (sourceImageElement.offsetHeight - cropperHeight) / 2;
            this.cropper.y2 = this.cropper.y1 + cropperHeight;
        }
        else {
            this.cropper.y1 = 0;
            this.cropper.y2 = sourceImageElement.offsetHeight;
            /** @type {?} */
            var cropperWidth = sourceImageElement.offsetHeight * this.aspectRatio;
            this.cropper.x1 = (sourceImageElement.offsetWidth - cropperWidth) / 2;
            this.cropper.x2 = this.cropper.x1 + cropperWidth;
        }
        this.doAutoCrop();
        this.imageVisible = true;
    };
    /**
     * @param {?} event
     * @param {?} moveType
     * @param {?=} position
     * @return {?}
     */
    ImageCropperComponent.prototype.startMove = /**
     * @param {?} event
     * @param {?} moveType
     * @param {?=} position
     * @return {?}
     */
    function (event, moveType, position) {
        if (position === void 0) { position = null; }
        event.preventDefault();
        this.moveStart = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ active: true, type: moveType, position: position, clientX: this.getClientX(event), clientY: this.getClientY(event) }, this.cropper);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ImageCropperComponent.prototype.moveImg = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.moveStart.active) {
            event.stopPropagation();
            event.preventDefault();
            if (this.moveStart.type === 'move') {
                this.move(event);
                this.checkCropperPosition(true);
            }
            else if (this.moveStart.type === 'resize') {
                this.resize(event);
                this.checkCropperPosition(false);
            }
            this.cd.detectChanges();
        }
    };
    /**
     * @return {?}
     */
    ImageCropperComponent.prototype.setMaxSize = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var sourceImageElement = this.sourceImage.nativeElement;
        this.maxSize.width = sourceImageElement.offsetWidth;
        this.maxSize.height = sourceImageElement.offsetHeight;
        this.marginLeft = this.sanitizer.bypassSecurityTrustStyle('calc(50% - ' + this.maxSize.width / 2 + 'px)');
    };
    /**
     * @return {?}
     */
    ImageCropperComponent.prototype.setCropperScaledMinSize = /**
     * @return {?}
     */
    function () {
        if (this.originalImage) {
            this.setCropperScaledMinWidth();
            this.setCropperScaledMinHeight();
        }
        else {
            this.cropperScaledMinWidth = 20;
            this.cropperScaledMinHeight = 20;
        }
    };
    /**
     * @return {?}
     */
    ImageCropperComponent.prototype.setCropperScaledMinWidth = /**
     * @return {?}
     */
    function () {
        this.cropperScaledMinWidth = this.cropperMinWidth > 0
            ? Math.max(20, this.cropperMinWidth / this.originalImage.width * this.maxSize.width)
            : 20;
    };
    /**
     * @return {?}
     */
    ImageCropperComponent.prototype.setCropperScaledMinHeight = /**
     * @return {?}
     */
    function () {
        if (this.maintainAspectRatio) {
            this.cropperScaledMinHeight = Math.max(20, this.cropperScaledMinWidth / this.aspectRatio);
        }
        else if (this.cropperMinHeight > 0) {
            this.cropperScaledMinHeight = Math.max(20, this.cropperMinHeight / this.originalImage.height * this.maxSize.height);
        }
        else {
            this.cropperScaledMinHeight = 20;
        }
    };
    /**
     * @param {?=} maintainSize
     * @return {?}
     */
    ImageCropperComponent.prototype.checkCropperPosition = /**
     * @param {?=} maintainSize
     * @return {?}
     */
    function (maintainSize) {
        if (maintainSize === void 0) { maintainSize = false; }
        if (this.cropper.x1 < 0) {
            this.cropper.x2 -= maintainSize ? this.cropper.x1 : 0;
            this.cropper.x1 = 0;
        }
        if (this.cropper.y1 < 0) {
            this.cropper.y2 -= maintainSize ? this.cropper.y1 : 0;
            this.cropper.y1 = 0;
        }
        if (this.cropper.x2 > this.maxSize.width) {
            this.cropper.x1 -= maintainSize ? (this.cropper.x2 - this.maxSize.width) : 0;
            this.cropper.x2 = this.maxSize.width;
        }
        if (this.cropper.y2 > this.maxSize.height) {
            this.cropper.y1 -= maintainSize ? (this.cropper.y2 - this.maxSize.height) : 0;
            this.cropper.y2 = this.maxSize.height;
        }
    };
    /**
     * @return {?}
     */
    ImageCropperComponent.prototype.moveStop = /**
     * @return {?}
     */
    function () {
        if (this.moveStart.active) {
            this.moveStart.active = false;
            this.doAutoCrop();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ImageCropperComponent.prototype.move = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var diffX = this.getClientX(event) - this.moveStart.clientX;
        /** @type {?} */
        var diffY = this.getClientY(event) - this.moveStart.clientY;
        this.cropper.x1 = this.moveStart.x1 + diffX;
        this.cropper.y1 = this.moveStart.y1 + diffY;
        this.cropper.x2 = this.moveStart.x2 + diffX;
        this.cropper.y2 = this.moveStart.y2 + diffY;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ImageCropperComponent.prototype.resize = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var diffX = this.getClientX(event) - this.moveStart.clientX;
        /** @type {?} */
        var diffY = this.getClientY(event) - this.moveStart.clientY;
        switch (this.moveStart.position) {
            case 'left':
                this.cropper.x1 = Math.min(this.moveStart.x1 + diffX, this.cropper.x2 - this.cropperScaledMinWidth);
                break;
            case 'topleft':
                this.cropper.x1 = Math.min(this.moveStart.x1 + diffX, this.cropper.x2 - this.cropperScaledMinWidth);
                this.cropper.y1 = Math.min(this.moveStart.y1 + diffY, this.cropper.y2 - this.cropperScaledMinHeight);
                break;
            case 'top':
                this.cropper.y1 = Math.min(this.moveStart.y1 + diffY, this.cropper.y2 - this.cropperScaledMinHeight);
                break;
            case 'topright':
                this.cropper.x2 = Math.max(this.moveStart.x2 + diffX, this.cropper.x1 + this.cropperScaledMinWidth);
                this.cropper.y1 = Math.min(this.moveStart.y1 + diffY, this.cropper.y2 - this.cropperScaledMinHeight);
                break;
            case 'right':
                this.cropper.x2 = Math.max(this.moveStart.x2 + diffX, this.cropper.x1 + this.cropperScaledMinWidth);
                break;
            case 'bottomright':
                this.cropper.x2 = Math.max(this.moveStart.x2 + diffX, this.cropper.x1 + this.cropperScaledMinWidth);
                this.cropper.y2 = Math.max(this.moveStart.y2 + diffY, this.cropper.y1 + this.cropperScaledMinHeight);
                break;
            case 'bottom':
                this.cropper.y2 = Math.max(this.moveStart.y2 + diffY, this.cropper.y1 + this.cropperScaledMinHeight);
                break;
            case 'bottomleft':
                this.cropper.x1 = Math.min(this.moveStart.x1 + diffX, this.cropper.x2 - this.cropperScaledMinWidth);
                this.cropper.y2 = Math.max(this.moveStart.y2 + diffY, this.cropper.y1 + this.cropperScaledMinHeight);
                break;
        }
        if (this.maintainAspectRatio) {
            this.checkAspectRatio();
        }
    };
    /**
     * @return {?}
     */
    ImageCropperComponent.prototype.checkAspectRatio = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var overflowX = 0;
        /** @type {?} */
        var overflowY = 0;
        switch (this.moveStart.position) {
            case 'top':
                this.cropper.x2 = this.cropper.x1 + (this.cropper.y2 - this.cropper.y1) * this.aspectRatio;
                overflowX = Math.max(this.cropper.x2 - this.maxSize.width, 0);
                overflowY = Math.max(0 - this.cropper.y1, 0);
                if (overflowX > 0 || overflowY > 0) {
                    this.cropper.x2 -= (overflowY * this.aspectRatio) > overflowX ? (overflowY * this.aspectRatio) : overflowX;
                    this.cropper.y1 += (overflowY * this.aspectRatio) > overflowX ? overflowY : overflowX / this.aspectRatio;
                }
                break;
            case 'bottom':
                this.cropper.x2 = this.cropper.x1 + (this.cropper.y2 - this.cropper.y1) * this.aspectRatio;
                overflowX = Math.max(this.cropper.x2 - this.maxSize.width, 0);
                overflowY = Math.max(this.cropper.y2 - this.maxSize.height, 0);
                if (overflowX > 0 || overflowY > 0) {
                    this.cropper.x2 -= (overflowY * this.aspectRatio) > overflowX ? (overflowY * this.aspectRatio) : overflowX;
                    this.cropper.y2 -= (overflowY * this.aspectRatio) > overflowX ? overflowY : (overflowX / this.aspectRatio);
                }
                break;
            case 'topleft':
                this.cropper.y1 = this.cropper.y2 - (this.cropper.x2 - this.cropper.x1) / this.aspectRatio;
                overflowX = Math.max(0 - this.cropper.x1, 0);
                overflowY = Math.max(0 - this.cropper.y1, 0);
                if (overflowX > 0 || overflowY > 0) {
                    this.cropper.x1 += (overflowY * this.aspectRatio) > overflowX ? (overflowY * this.aspectRatio) : overflowX;
                    this.cropper.y1 += (overflowY * this.aspectRatio) > overflowX ? overflowY : overflowX / this.aspectRatio;
                }
                break;
            case 'topright':
                this.cropper.y1 = this.cropper.y2 - (this.cropper.x2 - this.cropper.x1) / this.aspectRatio;
                overflowX = Math.max(this.cropper.x2 - this.maxSize.width, 0);
                overflowY = Math.max(0 - this.cropper.y1, 0);
                if (overflowX > 0 || overflowY > 0) {
                    this.cropper.x2 -= (overflowY * this.aspectRatio) > overflowX ? (overflowY * this.aspectRatio) : overflowX;
                    this.cropper.y1 += (overflowY * this.aspectRatio) > overflowX ? overflowY : overflowX / this.aspectRatio;
                }
                break;
            case 'right':
            case 'bottomright':
                this.cropper.y2 = this.cropper.y1 + (this.cropper.x2 - this.cropper.x1) / this.aspectRatio;
                overflowX = Math.max(this.cropper.x2 - this.maxSize.width, 0);
                overflowY = Math.max(this.cropper.y2 - this.maxSize.height, 0);
                if (overflowX > 0 || overflowY > 0) {
                    this.cropper.x2 -= (overflowY * this.aspectRatio) > overflowX ? (overflowY * this.aspectRatio) : overflowX;
                    this.cropper.y2 -= (overflowY * this.aspectRatio) > overflowX ? overflowY : overflowX / this.aspectRatio;
                }
                break;
            case 'left':
            case 'bottomleft':
                this.cropper.y2 = this.cropper.y1 + (this.cropper.x2 - this.cropper.x1) / this.aspectRatio;
                overflowX = Math.max(0 - this.cropper.x1, 0);
                overflowY = Math.max(this.cropper.y2 - this.maxSize.height, 0);
                if (overflowX > 0 || overflowY > 0) {
                    this.cropper.x1 += (overflowY * this.aspectRatio) > overflowX ? (overflowY * this.aspectRatio) : overflowX;
                    this.cropper.y2 -= (overflowY * this.aspectRatio) > overflowX ? overflowY : overflowX / this.aspectRatio;
                }
                break;
        }
    };
    /**
     * @return {?}
     */
    ImageCropperComponent.prototype.doAutoCrop = /**
     * @return {?}
     */
    function () {
        if (this.autoCrop) {
            this.crop();
        }
    };
    /**
     * @param {?=} outputType
     * @return {?}
     */
    ImageCropperComponent.prototype.crop = /**
     * @param {?=} outputType
     * @return {?}
     */
    function (outputType) {
        if (outputType === void 0) { outputType = this.outputType; }
        if (this.sourceImage.nativeElement && this.originalImage != null) {
            this.startCropImage.emit();
            /** @type {?} */
            var imagePosition = this.getImagePosition();
            /** @type {?} */
            var width = imagePosition.x2 - imagePosition.x1;
            /** @type {?} */
            var height = imagePosition.y2 - imagePosition.y1;
            /** @type {?} */
            var cropCanvas = /** @type {?} */ (document.createElement('canvas'));
            cropCanvas.width = width;
            cropCanvas.height = height;
            /** @type {?} */
            var ctx = cropCanvas.getContext('2d');
            if (ctx) {
                if (this.backgroundColor != null) {
                    ctx.fillStyle = this.backgroundColor;
                    ctx.fillRect(0, 0, width, height);
                }
                ctx.drawImage(this.originalImage, imagePosition.x1, imagePosition.y1, width, height, 0, 0, width, height);
                /** @type {?} */
                var output = { width: width, height: height, imagePosition: imagePosition, cropperPosition: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.cropper) };
                /** @type {?} */
                var resizeRatio = this.getResizeRatio(width, height);
                if (resizeRatio !== 1) {
                    output.width = Math.round(width * resizeRatio);
                    output.height = this.maintainAspectRatio
                        ? Math.round(output.width / this.aspectRatio)
                        : Math.round(height * resizeRatio);
                    resizeCanvas(cropCanvas, output.width, output.height);
                }
                return this.cropToOutputType(outputType, cropCanvas, output);
            }
        }
        return null;
    };
    /**
     * @return {?}
     */
    ImageCropperComponent.prototype.getImagePosition = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var sourceImageElement = this.sourceImage.nativeElement;
        /** @type {?} */
        var ratio = this.originalSize.width / sourceImageElement.offsetWidth;
        return {
            x1: Math.round(this.cropper.x1 * ratio),
            y1: Math.round(this.cropper.y1 * ratio),
            x2: Math.min(Math.round(this.cropper.x2 * ratio), this.originalSize.width),
            y2: Math.min(Math.round(this.cropper.y2 * ratio), this.originalSize.height)
        };
    };
    /**
     * @param {?} outputType
     * @param {?} cropCanvas
     * @param {?} output
     * @return {?}
     */
    ImageCropperComponent.prototype.cropToOutputType = /**
     * @param {?} outputType
     * @param {?} cropCanvas
     * @param {?} output
     * @return {?}
     */
    function (outputType, cropCanvas, output) {
        var _this = this;
        switch (outputType) {
            case 'file':
                return this.cropToFile(cropCanvas)
                    .then(function (result) {
                    output.file = result;
                    _this.imageCropped.emit(output);
                    return output;
                });
            case 'both':
                output.base64 = this.cropToBase64(cropCanvas);
                return this.cropToFile(cropCanvas)
                    .then(function (result) {
                    output.file = result;
                    _this.imageCropped.emit(output);
                    return output;
                });
            default:
                output.base64 = this.cropToBase64(cropCanvas);
                this.imageCropped.emit(output);
                return output;
        }
    };
    /**
     * @param {?} cropCanvas
     * @return {?}
     */
    ImageCropperComponent.prototype.cropToBase64 = /**
     * @param {?} cropCanvas
     * @return {?}
     */
    function (cropCanvas) {
        /** @type {?} */
        var imageBase64 = cropCanvas.toDataURL('image/' + this.format, this.getQuality());
        this.imageCroppedBase64.emit(imageBase64);
        return imageBase64;
    };
    /**
     * @param {?} cropCanvas
     * @return {?}
     */
    ImageCropperComponent.prototype.cropToFile = /**
     * @param {?} cropCanvas
     * @return {?}
     */
    function (cropCanvas) {
        var _this = this;
        return this.getCanvasBlob(cropCanvas)
            .then(function (result) {
            if (result) {
                _this.imageCroppedFile.emit(result);
            }
            return result;
        });
    };
    /**
     * @param {?} cropCanvas
     * @return {?}
     */
    ImageCropperComponent.prototype.getCanvasBlob = /**
     * @param {?} cropCanvas
     * @return {?}
     */
    function (cropCanvas) {
        var _this = this;
        return new Promise(function (resolve) {
            cropCanvas.toBlob(function (result) { return _this.zone.run(function () { return resolve(result); }); }, 'image/' + _this.format, _this.getQuality());
        });
    };
    /**
     * @return {?}
     */
    ImageCropperComponent.prototype.getQuality = /**
     * @return {?}
     */
    function () {
        return Math.min(1, Math.max(0, this.imageQuality / 100));
    };
    /**
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    ImageCropperComponent.prototype.getResizeRatio = /**
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    function (width, height) {
        if (this.resizeToWidth > 0) {
            if (!this.onlyScaleDown || width > this.resizeToWidth) {
                return this.resizeToWidth / width;
            }
        }
        else if (this.resizeToHeight > 0) {
            if (!this.onlyScaleDown || height > this.resizeToHeight) {
                return this.resizeToHeight / height;
            }
        }
        return 1;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ImageCropperComponent.prototype.getClientX = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return event.clientX || event.touches && event.touches[0] && event.touches[0].clientX;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ImageCropperComponent.prototype.getClientY = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return event.clientY || event.touches && event.touches[0] && event.touches[0].clientY;
    };
    ImageCropperComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'image-cropper',
                    template: "<div [style.background]=\"imageVisible && backgroundColor\">\n    <img\n        #sourceImage\n        class=\"source-image\"\n        [src]=\"safeImgDataUrl\"\n        [style.visibility]=\"imageVisible ? 'visible' : 'hidden'\"\n        (load)=\"imageLoadedInView()\"\n    />\n    <div class=\"cropper\"\n         *ngIf=\"imageVisible\"\n         [class.rounded]=\"roundCropper\"\n         [style.top.px]=\"cropper.y1\"\n         [style.left.px]=\"cropper.x1\"\n         [style.width.px]=\"cropper.x2 - cropper.x1\"\n         [style.height.px]=\"cropper.y2 - cropper.y1\"\n         [style.margin-left]=\"alignImage === 'center' ? marginLeft : null\"\n         [style.visibility]=\"imageVisible ? 'visible' : 'hidden'\"\n    >\n        <div\n                (mousedown)=\"startMove($event, 'move')\"\n                (touchstart)=\"startMove($event, 'move')\"\n                class=\"move\"\n        >&nbsp;</div>\n        <span\n                class=\"resize topleft\"\n                (mousedown)=\"startMove($event, 'resize', 'topleft')\"\n                (touchstart)=\"startMove($event, 'resize', 'topleft')\"\n        ><span class=\"square\"></span></span>\n        <span\n                class=\"resize top\"\n        ><span class=\"square\"></span></span>\n        <span\n                class=\"resize topright\"\n                (mousedown)=\"startMove($event, 'resize', 'topright')\"\n                (touchstart)=\"startMove($event, 'resize', 'topright')\"\n        ><span class=\"square\"></span></span>\n        <span\n                class=\"resize right\"\n        ><span class=\"square\"></span></span>\n        <span\n                class=\"resize bottomright\"\n                (mousedown)=\"startMove($event, 'resize', 'bottomright')\"\n                (touchstart)=\"startMove($event, 'resize', 'bottomright')\"\n        ><span class=\"square\"></span></span>\n        <span\n                class=\"resize bottom\"\n        ><span class=\"square\"></span></span>\n        <span\n                class=\"resize bottomleft\"\n                (mousedown)=\"startMove($event, 'resize', 'bottomleft')\"\n                (touchstart)=\"startMove($event, 'resize', 'bottomleft')\"\n        ><span class=\"square\"></span></span>\n        <span\n                class=\"resize left\"\n        ><span class=\"square\"></span></span>\n        <span\n                class=\"resize-bar top\"\n                (mousedown)=\"startMove($event, 'resize', 'top')\"\n                (touchstart)=\"startMove($event, 'resize', 'top')\"\n        ></span>\n        <span\n                class=\"resize-bar right\"\n                (mousedown)=\"startMove($event, 'resize', 'right')\"\n                (touchstart)=\"startMove($event, 'resize', 'right')\"\n        ></span>\n        <span\n                class=\"resize-bar bottom\"\n                (mousedown)=\"startMove($event, 'resize', 'bottom')\"\n                (touchstart)=\"startMove($event, 'resize', 'bottom')\"\n        ></span>\n        <span\n                class=\"resize-bar left\"\n                (mousedown)=\"startMove($event, 'resize', 'left')\"\n                (touchstart)=\"startMove($event, 'resize', 'left')\"\n        ></span>\n    </div>\n</div>\n",
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                    styles: [":host{display:flex;position:relative;width:100%;max-width:100%;max-height:100%;overflow:hidden;padding:5px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host>div{position:relative;width:100%}:host>div img.source-image{max-width:100%;max-height:100%}:host .cropper{position:absolute;display:flex;color:#53535c;background:0 0;touch-action:none;outline:rgba(255,255,255,.3) solid 100vw}:host .cropper:after{position:absolute;content:'';top:0;bottom:0;left:0;right:0;pointer-events:none;border:1px dashed;opacity:.75;color:inherit;z-index:1}:host .cropper .move{width:100%;cursor:move;border:1px solid rgba(255,255,255,.5)}:host .cropper .resize{position:absolute;display:inline-block;line-height:6px;padding:8px;opacity:.85;z-index:1}:host .cropper .resize .square{display:inline-block;background:#53535c;width:6px;height:6px;border:1px solid rgba(255,255,255,.5);box-sizing:content-box}:host .cropper .resize.topleft{top:-12px;left:-12px;cursor:nwse-resize}:host .cropper .resize.top{top:-12px;left:calc(50% - 12px);cursor:ns-resize}:host .cropper .resize.topright{top:-12px;right:-12px;cursor:nesw-resize}:host .cropper .resize.right{top:calc(50% - 12px);right:-12px;cursor:ew-resize}:host .cropper .resize.bottomright{bottom:-12px;right:-12px;cursor:nwse-resize}:host .cropper .resize.bottom{bottom:-12px;left:calc(50% - 12px);cursor:ns-resize}:host .cropper .resize.bottomleft{bottom:-12px;left:-12px;cursor:nesw-resize}:host .cropper .resize.left{top:calc(50% - 12px);left:-12px;cursor:ew-resize}:host .cropper .resize-bar{position:absolute;z-index:1}:host .cropper .resize-bar.top{top:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}:host .cropper .resize-bar.right{top:11px;right:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}:host .cropper .resize-bar.bottom{bottom:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}:host .cropper .resize-bar.left{top:11px;left:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}:host .cropper.rounded{outline-color:transparent}:host .cropper.rounded:after{border-radius:100%;box-shadow:0 0 0 100vw rgba(255,255,255,.3)}@media (orientation:portrait){:host .cropper{outline-width:100vh}:host .cropper.rounded:after{box-shadow:0 0 0 100vh rgba(255,255,255,.3)}}:host .cropper.rounded .move{border-radius:100%}"]
                }] }
    ];
    /** @nocollapse */
    ImageCropperComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    ImageCropperComponent.propDecorators = {
        sourceImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['sourceImage',] }],
        imageFileChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        imageChangedEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        imageBase64: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        format: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        outputType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        maintainAspectRatio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        aspectRatio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        resizeToWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        resizeToHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        cropperMinWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        cropperMinHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        roundCropper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        onlyScaleDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        imageQuality: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        autoCrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        backgroundColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        containWithinAspectRatio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        cropper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        alignImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['style.text-align',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        startCropImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        imageCropped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        imageCroppedBase64: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        imageCroppedFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        imageLoaded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        cropperReady: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        loadImageFailed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        onResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['window:resize',] }],
        moveImg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['document:mousemove', ['$event'],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['document:touchmove', ['$event'],] }],
        moveStop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['document:mouseup',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['document:touchend',] }]
    };
    return ImageCropperComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ImageCropperModule = /** @class */ (function () {
    function ImageCropperModule() {
    }
    ImageCropperModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
                    ],
                    declarations: [
                        ImageCropperComponent
                    ],
                    exports: [
                        ImageCropperComponent
                    ]
                },] }
    ];
    return ImageCropperModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWltYWdlLWNyb3BwZXIuanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC1pbWFnZS1jcm9wcGVyL3NyYy91dGlscy9leGlmLnV0aWxzLnRzIiwibmc6Ly9uZ3gtaW1hZ2UtY3JvcHBlci9zcmMvdXRpbHMvcmVzaXplLnV0aWxzLnRzIiwibmc6Ly9uZ3gtaW1hZ2UtY3JvcHBlci9zcmMvY29tcG9uZW50L2ltYWdlLWNyb3BwZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtaW1hZ2UtY3JvcHBlci9zcmMvaW1hZ2UtY3JvcHBlci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHJlc2V0RXhpZk9yaWVudGF0aW9uKHNyY0Jhc2U2NDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBleGlmUm90YXRpb24gPSBnZXRFeGlmUm90YXRpb24oc3JjQmFzZTY0KTtcbiAgICAgICAgaWYgKGV4aWZSb3RhdGlvbiA+IDEpIHtcbiAgICAgICAgICAgIHJldHVybiB0cmFuc2Zvcm1CYXNlNjRCYXNlZE9uRXhpZlJvdGF0aW9uKHNyY0Jhc2U2NCwgZXhpZlJvdGF0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc3JjQmFzZTY0KTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChleCk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtQmFzZTY0QmFzZWRPbkV4aWZSb3RhdGlvbihzcmNCYXNlNjQ6IHN0cmluZywgZXhpZlJvdGF0aW9uOiBudW1iZXIpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBpbWcud2lkdGg7XG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBpbWcuaGVpZ2h0O1xuICAgICAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgICAgICAgICAgaWYgKGN0eCkge1xuICAgICAgICAgICAgICAgIGlmICg0IDwgZXhpZlJvdGF0aW9uICYmIGV4aWZSb3RhdGlvbiA8IDkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FudmFzLndpZHRoID0gaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gd2lkdGg7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybUNhbnZhcyhjdHgsIGV4aWZSb3RhdGlvbiwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIDAsIDApO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoY2FudmFzLnRvRGF0YVVSTCgpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignTm8gY29udGV4dCcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgaW1nLnNyYyA9IHNyY0Jhc2U2NDtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0RXhpZlJvdGF0aW9uKGltYWdlQmFzZTY0OiBzdHJpbmcpOiBudW1iZXIge1xuICAgIGNvbnN0IHZpZXcgPSBuZXcgRGF0YVZpZXcoYmFzZTY0VG9BcnJheUJ1ZmZlcihpbWFnZUJhc2U2NCkpO1xuICAgIGlmICh2aWV3LmdldFVpbnQxNigwLCBmYWxzZSkgIT0gMHhGRkQ4KSB7XG4gICAgICAgIHJldHVybiAtMjtcbiAgICB9XG4gICAgY29uc3QgbGVuZ3RoID0gdmlldy5ieXRlTGVuZ3RoO1xuICAgIGxldCBvZmZzZXQgPSAyO1xuICAgIHdoaWxlIChvZmZzZXQgPCBsZW5ndGgpIHtcbiAgICAgICAgaWYgKHZpZXcuZ2V0VWludDE2KG9mZnNldCArIDIsIGZhbHNlKSA8PSA4KSByZXR1cm4gLTE7XG4gICAgICAgIGNvbnN0IG1hcmtlciA9IHZpZXcuZ2V0VWludDE2KG9mZnNldCwgZmFsc2UpO1xuICAgICAgICBvZmZzZXQgKz0gMjtcbiAgICAgICAgaWYgKG1hcmtlciA9PSAweEZGRTEpIHtcbiAgICAgICAgICAgIGlmICh2aWV3LmdldFVpbnQzMihvZmZzZXQgKz0gMiwgZmFsc2UpICE9IDB4NDU3ODY5NjYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGxpdHRsZSA9IHZpZXcuZ2V0VWludDE2KG9mZnNldCArPSA2LCBmYWxzZSkgPT0gMHg0OTQ5O1xuICAgICAgICAgICAgb2Zmc2V0ICs9IHZpZXcuZ2V0VWludDMyKG9mZnNldCArIDQsIGxpdHRsZSk7XG4gICAgICAgICAgICBjb25zdCB0YWdzID0gdmlldy5nZXRVaW50MTYob2Zmc2V0LCBsaXR0bGUpO1xuICAgICAgICAgICAgb2Zmc2V0ICs9IDI7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhZ3M7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh2aWV3LmdldFVpbnQxNihvZmZzZXQgKyAoaSAqIDEyKSwgbGl0dGxlKSA9PSAweDAxMTIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZpZXcuZ2V0VWludDE2KG9mZnNldCArIChpICogMTIpICsgOCwgbGl0dGxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoKG1hcmtlciAmIDB4RkYwMCkgIT0gMHhGRjAwKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG9mZnNldCArPSB2aWV3LmdldFVpbnQxNihvZmZzZXQsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gLTE7XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFRvQXJyYXlCdWZmZXIoaW1hZ2VCYXNlNjQ6IHN0cmluZykge1xuICAgIGltYWdlQmFzZTY0ID0gaW1hZ2VCYXNlNjQucmVwbGFjZSgvXmRhdGFcXDooW15cXDtdKylcXDtiYXNlNjQsL2dtaSwgJycpO1xuICAgIGNvbnN0IGJpbmFyeVN0cmluZyA9IGF0b2IoaW1hZ2VCYXNlNjQpO1xuICAgIGNvbnN0IGxlbiA9IGJpbmFyeVN0cmluZy5sZW5ndGg7XG4gICAgY29uc3QgYnl0ZXMgPSBuZXcgVWludDhBcnJheShsZW4pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgYnl0ZXNbaV0gPSBiaW5hcnlTdHJpbmcuY2hhckNvZGVBdChpKTtcbiAgICB9XG4gICAgcmV0dXJuIGJ5dGVzLmJ1ZmZlcjtcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtQ2FudmFzKGN0eDogYW55LCBvcmllbnRhdGlvbjogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xuICAgIHN3aXRjaCAob3JpZW50YXRpb24pIHtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgY3R4LnRyYW5zZm9ybSgtMSwgMCwgMCwgMSwgd2lkdGgsIDApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGN0eC50cmFuc2Zvcm0oLTEsIDAsIDAsIC0xLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICBjdHgudHJhbnNmb3JtKDEsIDAsIDAsIC0xLCAwLCBoZWlnaHQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgIGN0eC50cmFuc2Zvcm0oMCwgMSwgMSwgMCwgMCwgMCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgY3R4LnRyYW5zZm9ybSgwLCAxLCAtMSwgMCwgaGVpZ2h0LCAwKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICBjdHgudHJhbnNmb3JtKDAsIC0xLCAtMSwgMCwgaGVpZ2h0LCB3aWR0aCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgY3R4LnRyYW5zZm9ybSgwLCAtMSwgMSwgMCwgMCwgd2lkdGgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuIiwiLypcbiAqIEhlcm1pdGUgcmVzaXplIC0gZmFzdCBpbWFnZSByZXNpemUvcmVzYW1wbGUgdXNpbmcgSGVybWl0ZSBmaWx0ZXIuXG4gKiBodHRwczovL2dpdGh1Yi5jb20vdmlsaXVzbGUvSGVybWl0ZS1yZXNpemVcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcmVzaXplQ2FudmFzKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCByZXNpemVDYW52YXMgPSB0cnVlKSB7XG4gICAgY29uc3Qgd2lkdGhfc291cmNlID0gY2FudmFzLndpZHRoO1xuICAgIGNvbnN0IGhlaWdodF9zb3VyY2UgPSBjYW52YXMuaGVpZ2h0O1xuICAgIHdpZHRoID0gTWF0aC5yb3VuZCh3aWR0aCk7XG4gICAgaGVpZ2h0ID0gTWF0aC5yb3VuZChoZWlnaHQpO1xuXG4gICAgY29uc3QgcmF0aW9fdyA9IHdpZHRoX3NvdXJjZSAvIHdpZHRoO1xuICAgIGNvbnN0IHJhdGlvX2ggPSBoZWlnaHRfc291cmNlIC8gaGVpZ2h0O1xuICAgIGNvbnN0IHJhdGlvX3dfaGFsZiA9IE1hdGguY2VpbChyYXRpb193IC8gMik7XG4gICAgY29uc3QgcmF0aW9faF9oYWxmID0gTWF0aC5jZWlsKHJhdGlvX2ggLyAyKTtcblxuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGlmIChjdHgpIHtcbiAgICAgICAgY29uc3QgaW1nID0gY3R4LmdldEltYWdlRGF0YSgwLCAwLCB3aWR0aF9zb3VyY2UsIGhlaWdodF9zb3VyY2UpO1xuICAgICAgICBjb25zdCBpbWcyID0gY3R4LmNyZWF0ZUltYWdlRGF0YSh3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGltZy5kYXRhO1xuICAgICAgICBjb25zdCBkYXRhMiA9IGltZzIuZGF0YTtcblxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGhlaWdodDsgaisrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdpZHRoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB4MiA9IChpICsgaiAqIHdpZHRoKSAqIDQ7XG4gICAgICAgICAgICAgICAgY29uc3QgY2VudGVyX3kgPSBqICogcmF0aW9faDtcbiAgICAgICAgICAgICAgICBsZXQgd2VpZ2h0ID0gMDtcbiAgICAgICAgICAgICAgICBsZXQgd2VpZ2h0cyA9IDA7XG4gICAgICAgICAgICAgICAgbGV0IHdlaWdodHNfYWxwaGEgPSAwO1xuICAgICAgICAgICAgICAgIGxldCBneF9yID0gMDtcbiAgICAgICAgICAgICAgICBsZXQgZ3hfZyA9IDA7XG4gICAgICAgICAgICAgICAgbGV0IGd4X2IgPSAwO1xuICAgICAgICAgICAgICAgIGxldCBneF9hID0gMDtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHh4X3N0YXJ0ID0gTWF0aC5mbG9vcihpICogcmF0aW9fdyk7XG4gICAgICAgICAgICAgICAgY29uc3QgeXlfc3RhcnQgPSBNYXRoLmZsb29yKGogKiByYXRpb19oKTtcbiAgICAgICAgICAgICAgICBsZXQgeHhfc3RvcCA9IE1hdGguY2VpbCgoaSArIDEpICogcmF0aW9fdyk7XG4gICAgICAgICAgICAgICAgbGV0IHl5X3N0b3AgPSBNYXRoLmNlaWwoKGogKyAxKSAqIHJhdGlvX2gpO1xuICAgICAgICAgICAgICAgIHh4X3N0b3AgPSBNYXRoLm1pbih4eF9zdG9wLCB3aWR0aF9zb3VyY2UpO1xuICAgICAgICAgICAgICAgIHl5X3N0b3AgPSBNYXRoLm1pbih5eV9zdG9wLCBoZWlnaHRfc291cmNlKTtcblxuICAgICAgICAgICAgICAgIGZvciAobGV0IHl5ID0geXlfc3RhcnQ7IHl5IDwgeXlfc3RvcDsgeXkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkeSA9IE1hdGguYWJzKGNlbnRlcl95IC0geXkpIC8gcmF0aW9faF9oYWxmO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjZW50ZXJfeCA9IGkgKiByYXRpb193O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB3MCA9IGR5ICogZHk7IC8vcHJlLWNhbGMgcGFydCBvZiB3XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHh4ID0geHhfc3RhcnQ7IHh4IDwgeHhfc3RvcDsgeHgrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZHggPSBNYXRoLmFicyhjZW50ZXJfeCAtIHh4KSAvIHJhdGlvX3dfaGFsZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHcgPSBNYXRoLnNxcnQodzAgKyBkeCAqIGR4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3ID49IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3BpeGVsIHRvbyBmYXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vaGVybWl0ZSBmaWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlaWdodCA9IDIgKiB3ICogdyAqIHcgLSAzICogdyAqIHcgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9zX3ggPSA0ICogKHh4ICsgeXkgKiB3aWR0aF9zb3VyY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9hbHBoYVxuICAgICAgICAgICAgICAgICAgICAgICAgZ3hfYSArPSB3ZWlnaHQgKiBkYXRhW3Bvc194ICsgM107XG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWlnaHRzX2FscGhhICs9IHdlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29sb3JzXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVtwb3NfeCArIDNdIDwgMjU1KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlaWdodCA9IHdlaWdodCAqIGRhdGFbcG9zX3ggKyAzXSAvIDI1MDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGd4X3IgKz0gd2VpZ2h0ICogZGF0YVtwb3NfeF07XG4gICAgICAgICAgICAgICAgICAgICAgICBneF9nICs9IHdlaWdodCAqIGRhdGFbcG9zX3ggKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGd4X2IgKz0gd2VpZ2h0ICogZGF0YVtwb3NfeCArIDJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2VpZ2h0cyArPSB3ZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGF0YTJbeDJdID0gZ3hfciAvIHdlaWdodHM7XG4gICAgICAgICAgICAgICAgZGF0YTJbeDIgKyAxXSA9IGd4X2cgLyB3ZWlnaHRzO1xuICAgICAgICAgICAgICAgIGRhdGEyW3gyICsgMl0gPSBneF9iIC8gd2VpZ2h0cztcbiAgICAgICAgICAgICAgICBkYXRhMlt4MiArIDNdID0gZ3hfYSAvIHdlaWdodHNfYWxwaGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy9jbGVhciBhbmQgcmVzaXplIGNhbnZhc1xuICAgICAgICBpZiAocmVzaXplQ2FudmFzKSB7XG4gICAgICAgICAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHdpZHRoX3NvdXJjZSwgaGVpZ2h0X3NvdXJjZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvL2RyYXdcbiAgICAgICAgY3R4LnB1dEltYWdlRGF0YShpbWcyLCAwLCAwKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXRJbWFnZVRvQXNwZWN0UmF0aW8oc3JjQmFzZTY0OiBzdHJpbmcsIGFzcGVjdFJhdGlvOiBudW1iZXIpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgICAgICAgICAgaWYgKGN0eCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1pbldpZHRoVG9Db250YWluID0gaW1nLmhlaWdodCAqIGFzcGVjdFJhdGlvO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1pbkhlaWdodFRvQ29udGFpbiA9IGltZy53aWR0aCAvIGFzcGVjdFJhdGlvO1xuICAgICAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IE1hdGgubWF4KGltZy53aWR0aCwgbWluV2lkdGhUb0NvbnRhaW4pO1xuICAgICAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBNYXRoLm1heChpbWcuaGVpZ2h0LCBtaW5IZWlnaHRUb0NvbnRhaW4pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGR4ID0gKGNhbnZhcy53aWR0aCAtIGltZy53aWR0aCkgLyAyO1xuICAgICAgICAgICAgICAgIGNvbnN0IGR5ID0gKGNhbnZhcy5oZWlnaHQgLSBpbWcuaGVpZ2h0KSAvIDI7XG4gICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIGR4LCBkeSk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShjYW52YXMudG9EYXRhVVJMKCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdObyBjb250ZXh0JykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBpbWcuc3JjID0gc3JjQmFzZTY0O1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uQ2hhbmdlcywgT3V0cHV0LFxuICAgIFNpbXBsZUNoYW5nZXMsIENoYW5nZURldGVjdG9yUmVmLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgTmdab25lLCBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVVcmwsIFNhZmVTdHlsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgTW92ZVN0YXJ0LCBEaW1lbnNpb25zLCBDcm9wcGVyUG9zaXRpb24sIEltYWdlQ3JvcHBlZEV2ZW50IH0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyByZXNldEV4aWZPcmllbnRhdGlvbiwgdHJhbnNmb3JtQmFzZTY0QmFzZWRPbkV4aWZSb3RhdGlvbiB9IGZyb20gJy4uL3V0aWxzL2V4aWYudXRpbHMnO1xuaW1wb3J0IHsgcmVzaXplQ2FudmFzLCBmaXRJbWFnZVRvQXNwZWN0UmF0aW8gfSBmcm9tICcuLi91dGlscy9yZXNpemUudXRpbHMnO1xuXG5leHBvcnQgdHlwZSBPdXRwdXRUeXBlID0gJ2Jhc2U2NCcgfCAnZmlsZScgfCAnYm90aCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaW1hZ2UtY3JvcHBlcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2ltYWdlLWNyb3BwZXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2ltYWdlLWNyb3BwZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBJbWFnZUNyb3BwZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICAgIHByaXZhdGUgb3JpZ2luYWxJbWFnZTogYW55O1xuICAgIHByaXZhdGUgb3JpZ2luYWxCYXNlNjQ6IHN0cmluZztcbiAgICBwcml2YXRlIG1vdmVTdGFydDogTW92ZVN0YXJ0O1xuICAgIHByaXZhdGUgbWF4U2l6ZTogRGltZW5zaW9ucztcbiAgICBwcml2YXRlIG9yaWdpbmFsU2l6ZTogRGltZW5zaW9ucztcbiAgICBwcml2YXRlIHNldEltYWdlTWF4U2l6ZVJldHJpZXMgPSAwO1xuICAgIHByaXZhdGUgY3JvcHBlclNjYWxlZE1pbldpZHRoID0gMjA7XG4gICAgcHJpdmF0ZSBjcm9wcGVyU2NhbGVkTWluSGVpZ2h0ID0gMjA7XG5cbiAgICBzYWZlSW1nRGF0YVVybDogU2FmZVVybCB8IHN0cmluZztcbiAgICBtYXJnaW5MZWZ0OiBTYWZlU3R5bGUgfCBzdHJpbmcgPSAnMHB4JztcbiAgICBpbWFnZVZpc2libGUgPSBmYWxzZTtcblxuICAgIEBWaWV3Q2hpbGQoJ3NvdXJjZUltYWdlJykgc291cmNlSW1hZ2U6IEVsZW1lbnRSZWY7XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCBpbWFnZUZpbGVDaGFuZ2VkKGZpbGU6IEZpbGUpIHtcbiAgICAgICAgdGhpcy5pbml0Q3JvcHBlcigpO1xuICAgICAgICBpZiAoZmlsZSkge1xuICAgICAgICAgICAgdGhpcy5sb2FkSW1hZ2VGaWxlKGZpbGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBzZXQgaW1hZ2VDaGFuZ2VkRXZlbnQoZXZlbnQ6IGFueSkge1xuICAgICAgICB0aGlzLmluaXRDcm9wcGVyKCk7XG4gICAgICAgIGlmIChldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LmZpbGVzICYmIGV2ZW50LnRhcmdldC5maWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRJbWFnZUZpbGUoZXZlbnQudGFyZ2V0LmZpbGVzWzBdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IGltYWdlQmFzZTY0KGltYWdlQmFzZTY0OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5pbml0Q3JvcHBlcigpO1xuICAgICAgICB0aGlzLmNoZWNrRXhpZkFuZExvYWRCYXNlNjRJbWFnZShpbWFnZUJhc2U2NCk7XG4gICAgfVxuXG4gICAgQElucHV0KCkgZm9ybWF0OiAncG5nJyB8ICdqcGVnJyB8ICdibXAnIHwgJ3dlYnAnIHwgJ2ljbycgPSAncG5nJztcbiAgICBASW5wdXQoKSBvdXRwdXRUeXBlOiBPdXRwdXRUeXBlID0gJ2JvdGgnO1xuICAgIEBJbnB1dCgpIG1haW50YWluQXNwZWN0UmF0aW8gPSB0cnVlO1xuICAgIEBJbnB1dCgpIGFzcGVjdFJhdGlvID0gMTtcbiAgICBASW5wdXQoKSByZXNpemVUb1dpZHRoID0gMDtcbiAgICBASW5wdXQoKSByZXNpemVUb0hlaWdodCA9IDA7XG4gICAgQElucHV0KCkgY3JvcHBlck1pbldpZHRoID0gMDtcbiAgICBASW5wdXQoKSBjcm9wcGVyTWluSGVpZ2h0ID0gMDtcbiAgICBASW5wdXQoKSByb3VuZENyb3BwZXIgPSBmYWxzZTtcbiAgICBASW5wdXQoKSBvbmx5U2NhbGVEb3duID0gZmFsc2U7XG4gICAgQElucHV0KCkgaW1hZ2VRdWFsaXR5ID0gOTI7XG4gICAgQElucHV0KCkgYXV0b0Nyb3AgPSB0cnVlO1xuICAgIEBJbnB1dCgpIGJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGNvbnRhaW5XaXRoaW5Bc3BlY3RSYXRpbyA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGNyb3BwZXI6IENyb3BwZXJQb3NpdGlvbiA9IHtcbiAgICAgICAgeDE6IC0xMDAsXG4gICAgICAgIHkxOiAtMTAwLFxuICAgICAgICB4MjogMTAwMDAsXG4gICAgICAgIHkyOiAxMDAwMFxuICAgIH07XG4gICAgQEhvc3RCaW5kaW5nKCdzdHlsZS50ZXh0LWFsaWduJylcbiAgICBASW5wdXQoKSBhbGlnbkltYWdlOiAnbGVmdCcgfCAnY2VudGVyJyA9ICdjZW50ZXInO1xuXG5cbiAgICBAT3V0cHV0KCkgc3RhcnRDcm9wSW1hZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gICAgQE91dHB1dCgpIGltYWdlQ3JvcHBlZCA9IG5ldyBFdmVudEVtaXR0ZXI8SW1hZ2VDcm9wcGVkRXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIGltYWdlQ3JvcHBlZEJhc2U2NCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICAgIEBPdXRwdXQoKSBpbWFnZUNyb3BwZWRGaWxlID0gbmV3IEV2ZW50RW1pdHRlcjxCbG9iPigpO1xuICAgIEBPdXRwdXQoKSBpbWFnZUxvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgICBAT3V0cHV0KCkgY3JvcHBlclJlYWR5ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICAgIEBPdXRwdXQoKSBsb2FkSW1hZ2VGYWlsZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgem9uZTogTmdab25lKSB7XG4gICAgICAgIHRoaXMuaW5pdENyb3BwZXIoKTtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgICAgIGlmIChjaGFuZ2VzLmNyb3BwZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0TWF4U2l6ZSgpO1xuICAgICAgICAgICAgdGhpcy5zZXRDcm9wcGVyU2NhbGVkTWluU2l6ZSgpO1xuICAgICAgICAgICAgdGhpcy5jaGVja0Nyb3BwZXJQb3NpdGlvbihmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLmRvQXV0b0Nyb3AoKTtcbiAgICAgICAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYW5nZXMuYXNwZWN0UmF0aW8gJiYgdGhpcy5pbWFnZVZpc2libGUpIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRDcm9wcGVyUG9zaXRpb24oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdENyb3BwZXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaW1hZ2VWaXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMub3JpZ2luYWxJbWFnZSA9IG51bGw7XG4gICAgICAgIHRoaXMuc2FmZUltZ0RhdGFVcmwgPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2cnXG4gICAgICAgICAgICArICdvQUFBQU5TVWhFVWdBQUFBRUFBQUFCQ0FZQUFBQWZGY1NKQUFBQUMwbEVRVlFZVjJOZ0FBSUFBQVUnXG4gICAgICAgICAgICArICdBQWFyVnlGRUFBQUFBU1VWT1JLNUNZSUk9JztcbiAgICAgICAgdGhpcy5tb3ZlU3RhcnQgPSB7XG4gICAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICAgICAgdHlwZTogbnVsbCxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBudWxsLFxuICAgICAgICAgICAgeDE6IDAsXG4gICAgICAgICAgICB5MTogMCxcbiAgICAgICAgICAgIHgyOiAwLFxuICAgICAgICAgICAgeTI6IDAsXG4gICAgICAgICAgICBjbGllbnRYOiAwLFxuICAgICAgICAgICAgY2xpZW50WTogMFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLm1heFNpemUgPSB7XG4gICAgICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgICAgIGhlaWdodDogMFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9yaWdpbmFsU2l6ZSA9IHtcbiAgICAgICAgICAgIHdpZHRoOiAwLFxuICAgICAgICAgICAgaGVpZ2h0OiAwXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY3JvcHBlci54MSA9IC0xMDA7XG4gICAgICAgIHRoaXMuY3JvcHBlci55MSA9IC0xMDA7XG4gICAgICAgIHRoaXMuY3JvcHBlci54MiA9IDEwMDAwO1xuICAgICAgICB0aGlzLmNyb3BwZXIueTIgPSAxMDAwMDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGxvYWRJbWFnZUZpbGUoZmlsZTogRmlsZSk6IHZvaWQge1xuICAgICAgICBjb25zdCBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgZmlsZVJlYWRlci5vbmxvYWQgPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW1hZ2VUeXBlID0gZmlsZS50eXBlO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNWYWxpZEltYWdlVHlwZShpbWFnZVR5cGUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0V4aWZBbmRMb2FkQmFzZTY0SW1hZ2UoZXZlbnQudGFyZ2V0LnJlc3VsdCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZEltYWdlRmFpbGVkLmVtaXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZmlsZVJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaXNWYWxpZEltYWdlVHlwZSh0eXBlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIC9pbWFnZVxcLyhwbmd8anBnfGpwZWd8Ym1wfGdpZnx0aWZmKS8udGVzdCh0eXBlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNoZWNrRXhpZkFuZExvYWRCYXNlNjRJbWFnZShpbWFnZUJhc2U2NDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHJlc2V0RXhpZk9yaWVudGF0aW9uKGltYWdlQmFzZTY0KVxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdEJhc2U2NDogc3RyaW5nKSA9PiB0aGlzLmZpdEltYWdlVG9Bc3BlY3RSYXRpbyhyZXN1bHRCYXNlNjQpKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdEJhc2U2NDogc3RyaW5nKSA9PiB0aGlzLmxvYWRCYXNlNjRJbWFnZShyZXN1bHRCYXNlNjQpKVxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHRoaXMubG9hZEltYWdlRmFpbGVkLmVtaXQoKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmaXRJbWFnZVRvQXNwZWN0UmF0aW8oaW1hZ2VCYXNlNjQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5XaXRoaW5Bc3BlY3RSYXRpb1xuICAgICAgICAgICAgPyBmaXRJbWFnZVRvQXNwZWN0UmF0aW8oaW1hZ2VCYXNlNjQsIHRoaXMuYXNwZWN0UmF0aW8pXG4gICAgICAgICAgICA6IFByb21pc2UucmVzb2x2ZShpbWFnZUJhc2U2NCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2FkQmFzZTY0SW1hZ2UoaW1hZ2VCYXNlNjQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLm9yaWdpbmFsQmFzZTY0ID0gaW1hZ2VCYXNlNjQ7XG4gICAgICAgIHRoaXMuc2FmZUltZ0RhdGFVcmwgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwoaW1hZ2VCYXNlNjQpO1xuICAgICAgICB0aGlzLm9yaWdpbmFsSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5vcmlnaW5hbEltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub3JpZ2luYWxTaXplLndpZHRoID0gdGhpcy5vcmlnaW5hbEltYWdlLndpZHRoO1xuICAgICAgICAgICAgdGhpcy5vcmlnaW5hbFNpemUuaGVpZ2h0ID0gdGhpcy5vcmlnaW5hbEltYWdlLmhlaWdodDtcbiAgICAgICAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub3JpZ2luYWxJbWFnZS5zcmMgPSBpbWFnZUJhc2U2NDtcbiAgICB9XG5cbiAgICBpbWFnZUxvYWRlZEluVmlldygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMub3JpZ2luYWxJbWFnZSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmltYWdlTG9hZGVkLmVtaXQoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0SW1hZ2VNYXhTaXplUmV0cmllcyA9IDA7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuY2hlY2tJbWFnZU1heFNpemVSZWN1cnNpdmVseSgpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgY2hlY2tJbWFnZU1heFNpemVSZWN1cnNpdmVseSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuc2V0SW1hZ2VNYXhTaXplUmV0cmllcyA+IDQwKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRJbWFnZUZhaWxlZC5lbWl0KCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zb3VyY2VJbWFnZSAmJiB0aGlzLnNvdXJjZUltYWdlLm5hdGl2ZUVsZW1lbnQgJiYgdGhpcy5zb3VyY2VJbWFnZS5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5zZXRNYXhTaXplKCk7XG4gICAgICAgICAgICB0aGlzLnNldENyb3BwZXJTY2FsZWRNaW5TaXplKCk7XG4gICAgICAgICAgICB0aGlzLnJlc2V0Q3JvcHBlclBvc2l0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLmNyb3BwZXJSZWFkeS5lbWl0KCk7XG4gICAgICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRJbWFnZU1heFNpemVSZXRyaWVzKys7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrSW1hZ2VNYXhTaXplUmVjdXJzaXZlbHkoKTtcbiAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnKVxuICAgIG9uUmVzaXplKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlc2l6ZUNyb3BwZXJQb3NpdGlvbigpO1xuICAgICAgICB0aGlzLnNldE1heFNpemUoKTtcbiAgICAgICAgdGhpcy5zZXRDcm9wcGVyU2NhbGVkTWluU2l6ZSgpO1xuICAgIH1cblxuICAgIHJvdGF0ZUxlZnQoKSB7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtQmFzZTY0KDgpO1xuICAgIH1cblxuICAgIHJvdGF0ZVJpZ2h0KCkge1xuICAgICAgICB0aGlzLnRyYW5zZm9ybUJhc2U2NCg2KTtcbiAgICB9XG5cbiAgICBmbGlwSG9yaXpvbnRhbCgpIHtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm1CYXNlNjQoMik7XG4gICAgfVxuXG4gICAgZmxpcFZlcnRpY2FsKCkge1xuICAgICAgICB0aGlzLnRyYW5zZm9ybUJhc2U2NCg0KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHRyYW5zZm9ybUJhc2U2NChleGlmT3JpZW50YXRpb246IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5vcmlnaW5hbEJhc2U2NCkge1xuICAgICAgICAgICAgdHJhbnNmb3JtQmFzZTY0QmFzZWRPbkV4aWZSb3RhdGlvbih0aGlzLm9yaWdpbmFsQmFzZTY0LCBleGlmT3JpZW50YXRpb24pXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdEJhc2U2NDogc3RyaW5nKSA9PiB0aGlzLmZpdEltYWdlVG9Bc3BlY3RSYXRpbyhyZXN1bHRCYXNlNjQpKVxuICAgICAgICAgICAgICAgIC50aGVuKChyb3RhdGVkQmFzZTY0OiBzdHJpbmcpID0+IHRoaXMubG9hZEJhc2U2NEltYWdlKHJvdGF0ZWRCYXNlNjQpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgcmVzaXplQ3JvcHBlclBvc2l0aW9uKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBzb3VyY2VJbWFnZUVsZW1lbnQgPSB0aGlzLnNvdXJjZUltYWdlLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGlmICh0aGlzLm1heFNpemUud2lkdGggIT09IHNvdXJjZUltYWdlRWxlbWVudC5vZmZzZXRXaWR0aCB8fCB0aGlzLm1heFNpemUuaGVpZ2h0ICE9PSBzb3VyY2VJbWFnZUVsZW1lbnQub2Zmc2V0SGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLmNyb3BwZXIueDEgPSB0aGlzLmNyb3BwZXIueDEgKiBzb3VyY2VJbWFnZUVsZW1lbnQub2Zmc2V0V2lkdGggLyB0aGlzLm1heFNpemUud2lkdGg7XG4gICAgICAgICAgICB0aGlzLmNyb3BwZXIueDIgPSB0aGlzLmNyb3BwZXIueDIgKiBzb3VyY2VJbWFnZUVsZW1lbnQub2Zmc2V0V2lkdGggLyB0aGlzLm1heFNpemUud2lkdGg7XG4gICAgICAgICAgICB0aGlzLmNyb3BwZXIueTEgPSB0aGlzLmNyb3BwZXIueTEgKiBzb3VyY2VJbWFnZUVsZW1lbnQub2Zmc2V0SGVpZ2h0IC8gdGhpcy5tYXhTaXplLmhlaWdodDtcbiAgICAgICAgICAgIHRoaXMuY3JvcHBlci55MiA9IHRoaXMuY3JvcHBlci55MiAqIHNvdXJjZUltYWdlRWxlbWVudC5vZmZzZXRIZWlnaHQgLyB0aGlzLm1heFNpemUuaGVpZ2h0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXNldENyb3BwZXJQb3NpdGlvbigpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc291cmNlSW1hZ2VFbGVtZW50ID0gdGhpcy5zb3VyY2VJbWFnZS5uYXRpdmVFbGVtZW50O1xuICAgICAgICBpZiAoIXRoaXMubWFpbnRhaW5Bc3BlY3RSYXRpbykge1xuICAgICAgICAgICAgdGhpcy5jcm9wcGVyLngxID0gMDtcbiAgICAgICAgICAgIHRoaXMuY3JvcHBlci54MiA9IHNvdXJjZUltYWdlRWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgIHRoaXMuY3JvcHBlci55MSA9IDA7XG4gICAgICAgICAgICB0aGlzLmNyb3BwZXIueTIgPSBzb3VyY2VJbWFnZUVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgICAgICB9IGVsc2UgaWYgKHNvdXJjZUltYWdlRWxlbWVudC5vZmZzZXRXaWR0aCAvIHRoaXMuYXNwZWN0UmF0aW8gPCBzb3VyY2VJbWFnZUVsZW1lbnQub2Zmc2V0SGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLmNyb3BwZXIueDEgPSAwO1xuICAgICAgICAgICAgdGhpcy5jcm9wcGVyLngyID0gc291cmNlSW1hZ2VFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgY29uc3QgY3JvcHBlckhlaWdodCA9IHNvdXJjZUltYWdlRWxlbWVudC5vZmZzZXRXaWR0aCAvIHRoaXMuYXNwZWN0UmF0aW87XG4gICAgICAgICAgICB0aGlzLmNyb3BwZXIueTEgPSAoc291cmNlSW1hZ2VFbGVtZW50Lm9mZnNldEhlaWdodCAtIGNyb3BwZXJIZWlnaHQpIC8gMjtcbiAgICAgICAgICAgIHRoaXMuY3JvcHBlci55MiA9IHRoaXMuY3JvcHBlci55MSArIGNyb3BwZXJIZWlnaHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNyb3BwZXIueTEgPSAwO1xuICAgICAgICAgICAgdGhpcy5jcm9wcGVyLnkyID0gc291cmNlSW1hZ2VFbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgIGNvbnN0IGNyb3BwZXJXaWR0aCA9IHNvdXJjZUltYWdlRWxlbWVudC5vZmZzZXRIZWlnaHQgKiB0aGlzLmFzcGVjdFJhdGlvO1xuICAgICAgICAgICAgdGhpcy5jcm9wcGVyLngxID0gKHNvdXJjZUltYWdlRWxlbWVudC5vZmZzZXRXaWR0aCAtIGNyb3BwZXJXaWR0aCkgLyAyO1xuICAgICAgICAgICAgdGhpcy5jcm9wcGVyLngyID0gdGhpcy5jcm9wcGVyLngxICsgY3JvcHBlcldpZHRoO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZG9BdXRvQ3JvcCgpO1xuICAgICAgICB0aGlzLmltYWdlVmlzaWJsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgc3RhcnRNb3ZlKGV2ZW50OiBhbnksIG1vdmVUeXBlOiBzdHJpbmcsIHBvc2l0aW9uOiBzdHJpbmcgfCBudWxsID0gbnVsbCk6IHZvaWQge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLm1vdmVTdGFydCA9IHtcbiAgICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6IG1vdmVUeXBlLFxuICAgICAgICAgICAgcG9zaXRpb24sXG4gICAgICAgICAgICBjbGllbnRYOiB0aGlzLmdldENsaWVudFgoZXZlbnQpLFxuICAgICAgICAgICAgY2xpZW50WTogdGhpcy5nZXRDbGllbnRZKGV2ZW50KSxcbiAgICAgICAgICAgIC4uLnRoaXMuY3JvcHBlclxuICAgICAgICB9O1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50Om1vdXNlbW92ZScsIFsnJGV2ZW50J10pXG4gICAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6dG91Y2htb3ZlJywgWyckZXZlbnQnXSlcbiAgICBtb3ZlSW1nKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubW92ZVN0YXJ0LmFjdGl2ZSkge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaWYgKHRoaXMubW92ZVN0YXJ0LnR5cGUgPT09ICdtb3ZlJykge1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZShldmVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0Nyb3BwZXJQb3NpdGlvbih0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5tb3ZlU3RhcnQudHlwZSA9PT0gJ3Jlc2l6ZScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2l6ZShldmVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0Nyb3BwZXJQb3NpdGlvbihmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc2V0TWF4U2l6ZSgpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc291cmNlSW1hZ2VFbGVtZW50ID0gdGhpcy5zb3VyY2VJbWFnZS5uYXRpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLm1heFNpemUud2lkdGggPSBzb3VyY2VJbWFnZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICAgIHRoaXMubWF4U2l6ZS5oZWlnaHQgPSBzb3VyY2VJbWFnZUVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgICAgICB0aGlzLm1hcmdpbkxlZnQgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoJ2NhbGMoNTAlIC0gJyArIHRoaXMubWF4U2l6ZS53aWR0aCAvIDIgKyAncHgpJyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRDcm9wcGVyU2NhbGVkTWluU2l6ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMub3JpZ2luYWxJbWFnZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRDcm9wcGVyU2NhbGVkTWluV2lkdGgoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q3JvcHBlclNjYWxlZE1pbkhlaWdodCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jcm9wcGVyU2NhbGVkTWluV2lkdGggPSAyMDtcbiAgICAgICAgICAgIHRoaXMuY3JvcHBlclNjYWxlZE1pbkhlaWdodCA9IDIwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRDcm9wcGVyU2NhbGVkTWluV2lkdGgoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3JvcHBlclNjYWxlZE1pbldpZHRoID0gdGhpcy5jcm9wcGVyTWluV2lkdGggPiAwXG4gICAgICAgICAgICA/IE1hdGgubWF4KDIwLCB0aGlzLmNyb3BwZXJNaW5XaWR0aCAvIHRoaXMub3JpZ2luYWxJbWFnZS53aWR0aCAqIHRoaXMubWF4U2l6ZS53aWR0aClcbiAgICAgICAgICAgIDogMjA7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRDcm9wcGVyU2NhbGVkTWluSGVpZ2h0KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5tYWludGFpbkFzcGVjdFJhdGlvKSB7XG4gICAgICAgICAgICB0aGlzLmNyb3BwZXJTY2FsZWRNaW5IZWlnaHQgPSBNYXRoLm1heCgyMCwgdGhpcy5jcm9wcGVyU2NhbGVkTWluV2lkdGggLyB0aGlzLmFzcGVjdFJhdGlvKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNyb3BwZXJNaW5IZWlnaHQgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmNyb3BwZXJTY2FsZWRNaW5IZWlnaHQgPSBNYXRoLm1heCgyMCwgdGhpcy5jcm9wcGVyTWluSGVpZ2h0IC8gdGhpcy5vcmlnaW5hbEltYWdlLmhlaWdodCAqIHRoaXMubWF4U2l6ZS5oZWlnaHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jcm9wcGVyU2NhbGVkTWluSGVpZ2h0ID0gMjA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGNoZWNrQ3JvcHBlclBvc2l0aW9uKG1haW50YWluU2l6ZSA9IGZhbHNlKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmNyb3BwZXIueDEgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmNyb3BwZXIueDIgLT0gbWFpbnRhaW5TaXplID8gdGhpcy5jcm9wcGVyLngxIDogMDtcbiAgICAgICAgICAgIHRoaXMuY3JvcHBlci54MSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY3JvcHBlci55MSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuY3JvcHBlci55MiAtPSBtYWludGFpblNpemUgPyB0aGlzLmNyb3BwZXIueTEgOiAwO1xuICAgICAgICAgICAgdGhpcy5jcm9wcGVyLnkxID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jcm9wcGVyLngyID4gdGhpcy5tYXhTaXplLndpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLmNyb3BwZXIueDEgLT0gbWFpbnRhaW5TaXplID8gKHRoaXMuY3JvcHBlci54MiAtIHRoaXMubWF4U2l6ZS53aWR0aCkgOiAwO1xuICAgICAgICAgICAgdGhpcy5jcm9wcGVyLngyID0gdGhpcy5tYXhTaXplLndpZHRoO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNyb3BwZXIueTIgPiB0aGlzLm1heFNpemUuaGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLmNyb3BwZXIueTEgLT0gbWFpbnRhaW5TaXplID8gKHRoaXMuY3JvcHBlci55MiAtIHRoaXMubWF4U2l6ZS5oZWlnaHQpIDogMDtcbiAgICAgICAgICAgIHRoaXMuY3JvcHBlci55MiA9IHRoaXMubWF4U2l6ZS5oZWlnaHQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDptb3VzZXVwJylcbiAgICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDp0b3VjaGVuZCcpXG4gICAgbW92ZVN0b3AoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm1vdmVTdGFydC5hY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMubW92ZVN0YXJ0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5kb0F1dG9Dcm9wKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG1vdmUoZXZlbnQ6IGFueSkge1xuICAgICAgICBjb25zdCBkaWZmWCA9IHRoaXMuZ2V0Q2xpZW50WChldmVudCkgLSB0aGlzLm1vdmVTdGFydC5jbGllbnRYO1xuICAgICAgICBjb25zdCBkaWZmWSA9IHRoaXMuZ2V0Q2xpZW50WShldmVudCkgLSB0aGlzLm1vdmVTdGFydC5jbGllbnRZO1xuXG4gICAgICAgIHRoaXMuY3JvcHBlci54MSA9IHRoaXMubW92ZVN0YXJ0LngxICsgZGlmZlg7XG4gICAgICAgIHRoaXMuY3JvcHBlci55MSA9IHRoaXMubW92ZVN0YXJ0LnkxICsgZGlmZlk7XG4gICAgICAgIHRoaXMuY3JvcHBlci54MiA9IHRoaXMubW92ZVN0YXJ0LngyICsgZGlmZlg7XG4gICAgICAgIHRoaXMuY3JvcHBlci55MiA9IHRoaXMubW92ZVN0YXJ0LnkyICsgZGlmZlk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXNpemUoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgICAgICBjb25zdCBkaWZmWCA9IHRoaXMuZ2V0Q2xpZW50WChldmVudCkgLSB0aGlzLm1vdmVTdGFydC5jbGllbnRYO1xuICAgICAgICBjb25zdCBkaWZmWSA9IHRoaXMuZ2V0Q2xpZW50WShldmVudCkgLSB0aGlzLm1vdmVTdGFydC5jbGllbnRZO1xuICAgICAgICBzd2l0Y2ggKHRoaXMubW92ZVN0YXJ0LnBvc2l0aW9uKSB7XG4gICAgICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICAgICAgICB0aGlzLmNyb3BwZXIueDEgPSBNYXRoLm1pbih0aGlzLm1vdmVTdGFydC54MSArIGRpZmZYLCB0aGlzLmNyb3BwZXIueDIgLSB0aGlzLmNyb3BwZXJTY2FsZWRNaW5XaWR0aCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd0b3BsZWZ0JzpcbiAgICAgICAgICAgICAgICB0aGlzLmNyb3BwZXIueDEgPSBNYXRoLm1pbih0aGlzLm1vdmVTdGFydC54MSArIGRpZmZYLCB0aGlzLmNyb3BwZXIueDIgLSB0aGlzLmNyb3BwZXJTY2FsZWRNaW5XaWR0aCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jcm9wcGVyLnkxID0gTWF0aC5taW4odGhpcy5tb3ZlU3RhcnQueTEgKyBkaWZmWSwgdGhpcy5jcm9wcGVyLnkyIC0gdGhpcy5jcm9wcGVyU2NhbGVkTWluSGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgICAgICAgICAgdGhpcy5jcm9wcGVyLnkxID0gTWF0aC5taW4odGhpcy5tb3ZlU3RhcnQueTEgKyBkaWZmWSwgdGhpcy5jcm9wcGVyLnkyIC0gdGhpcy5jcm9wcGVyU2NhbGVkTWluSGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3RvcHJpZ2h0JzpcbiAgICAgICAgICAgICAgICB0aGlzLmNyb3BwZXIueDIgPSBNYXRoLm1heCh0aGlzLm1vdmVTdGFydC54MiArIGRpZmZYLCB0aGlzLmNyb3BwZXIueDEgKyB0aGlzLmNyb3BwZXJTY2FsZWRNaW5XaWR0aCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jcm9wcGVyLnkxID0gTWF0aC5taW4odGhpcy5tb3ZlU3RhcnQueTEgKyBkaWZmWSwgdGhpcy5jcm9wcGVyLnkyIC0gdGhpcy5jcm9wcGVyU2NhbGVkTWluSGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICAgICAgICB0aGlzLmNyb3BwZXIueDIgPSBNYXRoLm1heCh0aGlzLm1vdmVTdGFydC54MiArIGRpZmZYLCB0aGlzLmNyb3BwZXIueDEgKyB0aGlzLmNyb3BwZXJTY2FsZWRNaW5XaWR0aCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdib3R0b21yaWdodCc6XG4gICAgICAgICAgICAgICAgdGhpcy5jcm9wcGVyLngyID0gTWF0aC5tYXgodGhpcy5tb3ZlU3RhcnQueDIgKyBkaWZmWCwgdGhpcy5jcm9wcGVyLngxICsgdGhpcy5jcm9wcGVyU2NhbGVkTWluV2lkdGgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3JvcHBlci55MiA9IE1hdGgubWF4KHRoaXMubW92ZVN0YXJ0LnkyICsgZGlmZlksIHRoaXMuY3JvcHBlci55MSArIHRoaXMuY3JvcHBlclNjYWxlZE1pbkhlaWdodCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICAgICAgICAgIHRoaXMuY3JvcHBlci55MiA9IE1hdGgubWF4KHRoaXMubW92ZVN0YXJ0LnkyICsgZGlmZlksIHRoaXMuY3JvcHBlci55MSArIHRoaXMuY3JvcHBlclNjYWxlZE1pbkhlaWdodCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdib3R0b21sZWZ0JzpcbiAgICAgICAgICAgICAgICB0aGlzLmNyb3BwZXIueDEgPSBNYXRoLm1pbih0aGlzLm1vdmVTdGFydC54MSArIGRpZmZYLCB0aGlzLmNyb3BwZXIueDIgLSB0aGlzLmNyb3BwZXJTY2FsZWRNaW5XaWR0aCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jcm9wcGVyLnkyID0gTWF0aC5tYXgodGhpcy5tb3ZlU3RhcnQueTIgKyBkaWZmWSwgdGhpcy5jcm9wcGVyLnkxICsgdGhpcy5jcm9wcGVyU2NhbGVkTWluSGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm1haW50YWluQXNwZWN0UmF0aW8pIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tBc3BlY3RSYXRpbygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjaGVja0FzcGVjdFJhdGlvKCk6IHZvaWQge1xuICAgICAgICBsZXQgb3ZlcmZsb3dYID0gMDtcbiAgICAgICAgbGV0IG92ZXJmbG93WSA9IDA7XG5cbiAgICAgICAgc3dpdGNoICh0aGlzLm1vdmVTdGFydC5wb3NpdGlvbikge1xuICAgICAgICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgICAgICAgICB0aGlzLmNyb3BwZXIueDIgPSB0aGlzLmNyb3BwZXIueDEgKyAodGhpcy5jcm9wcGVyLnkyIC0gdGhpcy5jcm9wcGVyLnkxKSAqIHRoaXMuYXNwZWN0UmF0aW87XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3dYID0gTWF0aC5tYXgodGhpcy5jcm9wcGVyLngyIC0gdGhpcy5tYXhTaXplLndpZHRoLCAwKTtcbiAgICAgICAgICAgICAgICBvdmVyZmxvd1kgPSBNYXRoLm1heCgwIC0gdGhpcy5jcm9wcGVyLnkxLCAwKTtcbiAgICAgICAgICAgICAgICBpZiAob3ZlcmZsb3dYID4gMCB8fCBvdmVyZmxvd1kgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JvcHBlci54MiAtPSAob3ZlcmZsb3dZICogdGhpcy5hc3BlY3RSYXRpbykgPiBvdmVyZmxvd1ggPyAob3ZlcmZsb3dZICogdGhpcy5hc3BlY3RSYXRpbykgOiBvdmVyZmxvd1g7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JvcHBlci55MSArPSAob3ZlcmZsb3dZICogdGhpcy5hc3BlY3RSYXRpbykgPiBvdmVyZmxvd1ggPyBvdmVyZmxvd1kgOiBvdmVyZmxvd1ggLyB0aGlzLmFzcGVjdFJhdGlvO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgICAgICAgICAgdGhpcy5jcm9wcGVyLngyID0gdGhpcy5jcm9wcGVyLngxICsgKHRoaXMuY3JvcHBlci55MiAtIHRoaXMuY3JvcHBlci55MSkgKiB0aGlzLmFzcGVjdFJhdGlvO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93WCA9IE1hdGgubWF4KHRoaXMuY3JvcHBlci54MiAtIHRoaXMubWF4U2l6ZS53aWR0aCwgMCk7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3dZID0gTWF0aC5tYXgodGhpcy5jcm9wcGVyLnkyIC0gdGhpcy5tYXhTaXplLmhlaWdodCwgMCk7XG4gICAgICAgICAgICAgICAgaWYgKG92ZXJmbG93WCA+IDAgfHwgb3ZlcmZsb3dZID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyb3BwZXIueDIgLT0gKG92ZXJmbG93WSAqIHRoaXMuYXNwZWN0UmF0aW8pID4gb3ZlcmZsb3dYID8gKG92ZXJmbG93WSAqIHRoaXMuYXNwZWN0UmF0aW8pIDogb3ZlcmZsb3dYO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyb3BwZXIueTIgLT0gKG92ZXJmbG93WSAqIHRoaXMuYXNwZWN0UmF0aW8pID4gb3ZlcmZsb3dYID8gb3ZlcmZsb3dZIDogKG92ZXJmbG93WCAvIHRoaXMuYXNwZWN0UmF0aW8pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3RvcGxlZnQnOlxuICAgICAgICAgICAgICAgIHRoaXMuY3JvcHBlci55MSA9IHRoaXMuY3JvcHBlci55MiAtICh0aGlzLmNyb3BwZXIueDIgLSB0aGlzLmNyb3BwZXIueDEpIC8gdGhpcy5hc3BlY3RSYXRpbztcbiAgICAgICAgICAgICAgICBvdmVyZmxvd1ggPSBNYXRoLm1heCgwIC0gdGhpcy5jcm9wcGVyLngxLCAwKTtcbiAgICAgICAgICAgICAgICBvdmVyZmxvd1kgPSBNYXRoLm1heCgwIC0gdGhpcy5jcm9wcGVyLnkxLCAwKTtcbiAgICAgICAgICAgICAgICBpZiAob3ZlcmZsb3dYID4gMCB8fCBvdmVyZmxvd1kgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JvcHBlci54MSArPSAob3ZlcmZsb3dZICogdGhpcy5hc3BlY3RSYXRpbykgPiBvdmVyZmxvd1ggPyAob3ZlcmZsb3dZICogdGhpcy5hc3BlY3RSYXRpbykgOiBvdmVyZmxvd1g7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JvcHBlci55MSArPSAob3ZlcmZsb3dZICogdGhpcy5hc3BlY3RSYXRpbykgPiBvdmVyZmxvd1ggPyBvdmVyZmxvd1kgOiBvdmVyZmxvd1ggLyB0aGlzLmFzcGVjdFJhdGlvO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3RvcHJpZ2h0JzpcbiAgICAgICAgICAgICAgICB0aGlzLmNyb3BwZXIueTEgPSB0aGlzLmNyb3BwZXIueTIgLSAodGhpcy5jcm9wcGVyLngyIC0gdGhpcy5jcm9wcGVyLngxKSAvIHRoaXMuYXNwZWN0UmF0aW87XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3dYID0gTWF0aC5tYXgodGhpcy5jcm9wcGVyLngyIC0gdGhpcy5tYXhTaXplLndpZHRoLCAwKTtcbiAgICAgICAgICAgICAgICBvdmVyZmxvd1kgPSBNYXRoLm1heCgwIC0gdGhpcy5jcm9wcGVyLnkxLCAwKTtcbiAgICAgICAgICAgICAgICBpZiAob3ZlcmZsb3dYID4gMCB8fCBvdmVyZmxvd1kgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JvcHBlci54MiAtPSAob3ZlcmZsb3dZICogdGhpcy5hc3BlY3RSYXRpbykgPiBvdmVyZmxvd1ggPyAob3ZlcmZsb3dZICogdGhpcy5hc3BlY3RSYXRpbykgOiBvdmVyZmxvd1g7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JvcHBlci55MSArPSAob3ZlcmZsb3dZICogdGhpcy5hc3BlY3RSYXRpbykgPiBvdmVyZmxvd1ggPyBvdmVyZmxvd1kgOiBvdmVyZmxvd1ggLyB0aGlzLmFzcGVjdFJhdGlvO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICAgIGNhc2UgJ2JvdHRvbXJpZ2h0JzpcbiAgICAgICAgICAgICAgICB0aGlzLmNyb3BwZXIueTIgPSB0aGlzLmNyb3BwZXIueTEgKyAodGhpcy5jcm9wcGVyLngyIC0gdGhpcy5jcm9wcGVyLngxKSAvIHRoaXMuYXNwZWN0UmF0aW87XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3dYID0gTWF0aC5tYXgodGhpcy5jcm9wcGVyLngyIC0gdGhpcy5tYXhTaXplLndpZHRoLCAwKTtcbiAgICAgICAgICAgICAgICBvdmVyZmxvd1kgPSBNYXRoLm1heCh0aGlzLmNyb3BwZXIueTIgLSB0aGlzLm1heFNpemUuaGVpZ2h0LCAwKTtcbiAgICAgICAgICAgICAgICBpZiAob3ZlcmZsb3dYID4gMCB8fCBvdmVyZmxvd1kgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JvcHBlci54MiAtPSAob3ZlcmZsb3dZICogdGhpcy5hc3BlY3RSYXRpbykgPiBvdmVyZmxvd1ggPyAob3ZlcmZsb3dZICogdGhpcy5hc3BlY3RSYXRpbykgOiBvdmVyZmxvd1g7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JvcHBlci55MiAtPSAob3ZlcmZsb3dZICogdGhpcy5hc3BlY3RSYXRpbykgPiBvdmVyZmxvd1ggPyBvdmVyZmxvd1kgOiBvdmVyZmxvd1ggLyB0aGlzLmFzcGVjdFJhdGlvO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICAgICAgY2FzZSAnYm90dG9tbGVmdCc6XG4gICAgICAgICAgICAgICAgdGhpcy5jcm9wcGVyLnkyID0gdGhpcy5jcm9wcGVyLnkxICsgKHRoaXMuY3JvcHBlci54MiAtIHRoaXMuY3JvcHBlci54MSkgLyB0aGlzLmFzcGVjdFJhdGlvO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93WCA9IE1hdGgubWF4KDAgLSB0aGlzLmNyb3BwZXIueDEsIDApO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93WSA9IE1hdGgubWF4KHRoaXMuY3JvcHBlci55MiAtIHRoaXMubWF4U2l6ZS5oZWlnaHQsIDApO1xuICAgICAgICAgICAgICAgIGlmIChvdmVyZmxvd1ggPiAwIHx8IG92ZXJmbG93WSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcm9wcGVyLngxICs9IChvdmVyZmxvd1kgKiB0aGlzLmFzcGVjdFJhdGlvKSA+IG92ZXJmbG93WCA/IChvdmVyZmxvd1kgKiB0aGlzLmFzcGVjdFJhdGlvKSA6IG92ZXJmbG93WDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcm9wcGVyLnkyIC09IChvdmVyZmxvd1kgKiB0aGlzLmFzcGVjdFJhdGlvKSA+IG92ZXJmbG93WCA/IG92ZXJmbG93WSA6IG92ZXJmbG93WCAvIHRoaXMuYXNwZWN0UmF0aW87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkb0F1dG9Dcm9wKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5hdXRvQ3JvcCkge1xuICAgICAgICAgICAgdGhpcy5jcm9wKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjcm9wKG91dHB1dFR5cGU6IE91dHB1dFR5cGUgPSB0aGlzLm91dHB1dFR5cGUpOiBJbWFnZUNyb3BwZWRFdmVudCB8IFByb21pc2U8SW1hZ2VDcm9wcGVkRXZlbnQ+IHwgbnVsbCB7XG4gICAgICAgIGlmICh0aGlzLnNvdXJjZUltYWdlLm5hdGl2ZUVsZW1lbnQgJiYgdGhpcy5vcmlnaW5hbEltYWdlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRDcm9wSW1hZ2UuZW1pdCgpO1xuICAgICAgICAgICAgY29uc3QgaW1hZ2VQb3NpdGlvbiA9IHRoaXMuZ2V0SW1hZ2VQb3NpdGlvbigpO1xuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBpbWFnZVBvc2l0aW9uLngyIC0gaW1hZ2VQb3NpdGlvbi54MTtcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGltYWdlUG9zaXRpb24ueTIgLSBpbWFnZVBvc2l0aW9uLnkxO1xuXG4gICAgICAgICAgICBjb25zdCBjcm9wQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgICAgICAgICBjcm9wQ2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgICAgICBjcm9wQ2FudmFzLmhlaWdodCA9IGhlaWdodDtcblxuICAgICAgICAgICAgY29uc3QgY3R4ID0gY3JvcENhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgaWYgKGN0eCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJhY2tncm91bmRDb2xvciAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmJhY2tncm91bmRDb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKCAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcmlnaW5hbEltYWdlLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZVBvc2l0aW9uLngxLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZVBvc2l0aW9uLnkxLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBjb25zdCBvdXRwdXQgPSB7d2lkdGgsIGhlaWdodCwgaW1hZ2VQb3NpdGlvbiwgY3JvcHBlclBvc2l0aW9uOiB7Li4udGhpcy5jcm9wcGVyfX07XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzaXplUmF0aW8gPSB0aGlzLmdldFJlc2l6ZVJhdGlvKHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICAgICAgICAgIGlmIChyZXNpemVSYXRpbyAhPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBvdXRwdXQud2lkdGggPSBNYXRoLnJvdW5kKHdpZHRoICogcmVzaXplUmF0aW8pO1xuICAgICAgICAgICAgICAgICAgICBvdXRwdXQuaGVpZ2h0ID0gdGhpcy5tYWludGFpbkFzcGVjdFJhdGlvXG4gICAgICAgICAgICAgICAgICAgICAgICA/IE1hdGgucm91bmQob3V0cHV0LndpZHRoIC8gdGhpcy5hc3BlY3RSYXRpbylcbiAgICAgICAgICAgICAgICAgICAgICAgIDogTWF0aC5yb3VuZChoZWlnaHQgKiByZXNpemVSYXRpbyk7XG4gICAgICAgICAgICAgICAgICAgIHJlc2l6ZUNhbnZhcyhjcm9wQ2FudmFzLCBvdXRwdXQud2lkdGgsIG91dHB1dC5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jcm9wVG9PdXRwdXRUeXBlKG91dHB1dFR5cGUsIGNyb3BDYW52YXMsIG91dHB1dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRJbWFnZVBvc2l0aW9uKCk6IENyb3BwZXJQb3NpdGlvbiB7XG4gICAgICAgIGNvbnN0IHNvdXJjZUltYWdlRWxlbWVudCA9IHRoaXMuc291cmNlSW1hZ2UubmF0aXZlRWxlbWVudDtcbiAgICAgICAgY29uc3QgcmF0aW8gPSB0aGlzLm9yaWdpbmFsU2l6ZS53aWR0aCAvIHNvdXJjZUltYWdlRWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHgxOiBNYXRoLnJvdW5kKHRoaXMuY3JvcHBlci54MSAqIHJhdGlvKSxcbiAgICAgICAgICAgIHkxOiBNYXRoLnJvdW5kKHRoaXMuY3JvcHBlci55MSAqIHJhdGlvKSxcbiAgICAgICAgICAgIHgyOiBNYXRoLm1pbihNYXRoLnJvdW5kKHRoaXMuY3JvcHBlci54MiAqIHJhdGlvKSwgdGhpcy5vcmlnaW5hbFNpemUud2lkdGgpLFxuICAgICAgICAgICAgeTI6IE1hdGgubWluKE1hdGgucm91bmQodGhpcy5jcm9wcGVyLnkyICogcmF0aW8pLCB0aGlzLm9yaWdpbmFsU2l6ZS5oZWlnaHQpXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcm9wVG9PdXRwdXRUeXBlKG91dHB1dFR5cGU6IE91dHB1dFR5cGUsIGNyb3BDYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBvdXRwdXQ6IEltYWdlQ3JvcHBlZEV2ZW50KTogSW1hZ2VDcm9wcGVkRXZlbnQgfCBQcm9taXNlPEltYWdlQ3JvcHBlZEV2ZW50PiB7XG4gICAgICAgIHN3aXRjaCAob3V0cHV0VHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnZmlsZSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JvcFRvRmlsZShjcm9wQ2FudmFzKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0OiBCbG9iIHwgbnVsbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0LmZpbGUgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlQ3JvcHBlZC5lbWl0KG91dHB1dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNhc2UgJ2JvdGgnOlxuICAgICAgICAgICAgICAgIG91dHB1dC5iYXNlNjQgPSB0aGlzLmNyb3BUb0Jhc2U2NChjcm9wQ2FudmFzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jcm9wVG9GaWxlKGNyb3BDYW52YXMpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXN1bHQ6IEJsb2IgfCBudWxsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQuZmlsZSA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VDcm9wcGVkLmVtaXQob3V0cHV0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBvdXRwdXQuYmFzZTY0ID0gdGhpcy5jcm9wVG9CYXNlNjQoY3JvcENhbnZhcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZUNyb3BwZWQuZW1pdChvdXRwdXQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGNyb3BUb0Jhc2U2NChjcm9wQ2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IGltYWdlQmFzZTY0ID0gY3JvcENhbnZhcy50b0RhdGFVUkwoJ2ltYWdlLycgKyB0aGlzLmZvcm1hdCwgdGhpcy5nZXRRdWFsaXR5KCkpO1xuICAgICAgICB0aGlzLmltYWdlQ3JvcHBlZEJhc2U2NC5lbWl0KGltYWdlQmFzZTY0KTtcbiAgICAgICAgcmV0dXJuIGltYWdlQmFzZTY0O1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JvcFRvRmlsZShjcm9wQ2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCk6IFByb21pc2U8QmxvYiB8IG51bGw+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q2FudmFzQmxvYihjcm9wQ2FudmFzKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdDogQmxvYiB8IG51bGwpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VDcm9wcGVkRmlsZS5lbWl0KHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldENhbnZhc0Jsb2IoY3JvcENhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpOiBQcm9taXNlPEJsb2IgfCBudWxsPiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgY3JvcENhbnZhcy50b0Jsb2IoXG4gICAgICAgICAgICAgICAgKHJlc3VsdDogQmxvYiB8IG51bGwpID0+IHRoaXMuem9uZS5ydW4oKCkgPT4gcmVzb2x2ZShyZXN1bHQpKSxcbiAgICAgICAgICAgICAgICAnaW1hZ2UvJyArIHRoaXMuZm9ybWF0LFxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UXVhbGl0eSgpXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFF1YWxpdHkoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWluKDEsIE1hdGgubWF4KDAsIHRoaXMuaW1hZ2VRdWFsaXR5IC8gMTAwKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRSZXNpemVSYXRpbyh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLnJlc2l6ZVRvV2lkdGggPiAwKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMub25seVNjYWxlRG93biB8fCB3aWR0aCA+IHRoaXMucmVzaXplVG9XaWR0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlc2l6ZVRvV2lkdGggLyB3aWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnJlc2l6ZVRvSGVpZ2h0ID4gMCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLm9ubHlTY2FsZURvd24gfHwgaGVpZ2h0ID4gdGhpcy5yZXNpemVUb0hlaWdodCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlc2l6ZVRvSGVpZ2h0IC8gaGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAxO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRDbGllbnRYKGV2ZW50OiBhbnkpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gZXZlbnQuY2xpZW50WCB8fCBldmVudC50b3VjaGVzICYmIGV2ZW50LnRvdWNoZXNbMF0gJiYgZXZlbnQudG91Y2hlc1swXS5jbGllbnRYO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0Q2xpZW50WShldmVudDogYW55KTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIGV2ZW50LmNsaWVudFkgfHwgZXZlbnQudG91Y2hlcyAmJiBldmVudC50b3VjaGVzWzBdICYmIGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEltYWdlQ3JvcHBlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50L2ltYWdlLWNyb3BwZXIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEltYWdlQ3JvcHBlckNvbXBvbmVudFxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBJbWFnZUNyb3BwZXJDb21wb25lbnRcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEltYWdlQ3JvcHBlck1vZHVsZSB7fVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSw4QkFBcUMsU0FBaUI7SUFDbEQsSUFBSTs7UUFDQSxJQUFNLFlBQVksR0FBRyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDaEQsSUFBSSxZQUFZLEdBQUcsQ0FBQyxFQUFFO1lBQ2xCLE9BQU8sa0NBQWtDLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxDQUFDO1NBQ3RFO2FBQU07WUFDSCxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDckM7S0FDSjtJQUFDLE9BQU8sRUFBRSxFQUFFO1FBQ1QsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQzdCO0NBQ0o7Ozs7OztBQUVELDRDQUFtRCxTQUFpQixFQUFFLFlBQW9CO0lBQ3RGLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTs7UUFDL0IsSUFBTSxHQUFHLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUN4QixHQUFHLENBQUMsTUFBTSxHQUFHOztZQUNULElBQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7O1lBQ3hCLElBQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7O1lBQzFCLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7O1lBQ2hELElBQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFcEMsSUFBSSxHQUFHLEVBQUU7Z0JBQ0wsSUFBSSxDQUFDLEdBQUcsWUFBWSxJQUFJLFlBQVksR0FBRyxDQUFDLEVBQUU7b0JBQ3RDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO29CQUN0QixNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztpQkFDekI7cUJBQU07b0JBQ0gsTUFBTSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7b0JBQ3JCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO2lCQUMxQjtnQkFDRCxlQUFlLENBQUMsR0FBRyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQ2xELEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDekIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO2FBQy9CO2lCQUFNO2dCQUNILE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO2FBQ25DO1NBQ0osQ0FBQztRQUNGLEdBQUcsQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDO0tBQ3ZCLENBQUMsQ0FBQztDQUNOOzs7OztBQUVELHlCQUF5QixXQUFtQjs7SUFDeEMsSUFBTSxJQUFJLEdBQUcsSUFBSSxRQUFRLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUM1RCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxJQUFJLE1BQU0sRUFBRTtRQUNwQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0tBQ2I7O0lBQ0QsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQzs7SUFDL0IsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsT0FBTyxNQUFNLEdBQUcsTUFBTSxFQUFFO1FBQ3BCLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDOztRQUN0RCxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM3QyxNQUFNLElBQUksQ0FBQyxDQUFDO1FBQ1osSUFBSSxNQUFNLElBQUksTUFBTSxFQUFFO1lBQ2xCLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxJQUFJLFVBQVUsRUFBRTtnQkFDbEQsT0FBTyxDQUFDLENBQUMsQ0FBQzthQUNiOztZQUVELElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUM7WUFDNUQsTUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQzs7WUFDN0MsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDNUMsTUFBTSxJQUFJLENBQUMsQ0FBQztZQUNaLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzNCLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxJQUFJLE1BQU0sRUFBRTtvQkFDckQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2lCQUN4RDthQUNKO1NBQ0o7YUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sS0FBSyxNQUFNLEVBQUU7WUFDbEMsTUFBTTtTQUNUO2FBQ0k7WUFDRCxNQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDM0M7S0FDSjtJQUNELE9BQU8sQ0FBQyxDQUFDLENBQUM7Q0FDYjs7Ozs7QUFFRCw2QkFBNkIsV0FBbUI7SUFDNUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsNkJBQTZCLEVBQUUsRUFBRSxDQUFDLENBQUM7O0lBQ3JFLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzs7SUFDdkMsSUFBTSxHQUFHLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQzs7SUFDaEMsSUFBTSxLQUFLLEdBQUcsSUFBSSxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUMxQixLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN6QztJQUNELE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQztDQUN2Qjs7Ozs7Ozs7QUFFRCx5QkFBeUIsR0FBUSxFQUFFLFdBQW1CLEVBQUUsS0FBYSxFQUFFLE1BQWM7SUFDakYsUUFBUSxXQUFXO1FBQ2YsS0FBSyxDQUFDO1lBQ0YsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDckMsTUFBTTtRQUNWLEtBQUssQ0FBQztZQUNGLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDM0MsTUFBTTtRQUNWLEtBQUssQ0FBQztZQUNGLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3RDLE1BQU07UUFDVixLQUFLLENBQUM7WUFDRixHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEMsTUFBTTtRQUNWLEtBQUssQ0FBQztZQUNGLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLE1BQU07UUFDVixLQUFLLENBQUM7WUFDRixHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzNDLE1BQU07UUFDVixLQUFLLENBQUM7WUFDRixHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNyQyxNQUFNO0tBQ2I7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzR0Qsc0JBQTZCLE1BQXlCLEVBQUUsS0FBYSxFQUFFLE1BQWMsRUFBRSxZQUFtQjtJQUFuQiw2QkFBQSxFQUFBLG1CQUFtQjs7SUFDdEcsSUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQzs7SUFDbEMsSUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNwQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQzs7SUFFNUIsSUFBTSxPQUFPLEdBQUcsWUFBWSxHQUFHLEtBQUssQ0FBQzs7SUFDckMsSUFBTSxPQUFPLEdBQUcsYUFBYSxHQUFHLE1BQU0sQ0FBQzs7SUFDdkMsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0lBQzVDLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDOztJQUU1QyxJQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLElBQUksR0FBRyxFQUFFOztRQUNMLElBQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxZQUFZLEVBQUUsYUFBYSxDQUFDLENBQUM7O1FBQ2hFLElBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDOztRQUNoRCxJQUFNLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDOztRQUN0QixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRXhCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDN0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTs7Z0JBQzVCLElBQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxDQUFDOztnQkFDL0IsSUFBTSxRQUFRLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQzs7Z0JBQzdCLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQzs7Z0JBQ2YsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDOztnQkFDaEIsSUFBSSxhQUFhLEdBQUcsQ0FBQyxDQUFDOztnQkFDdEIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDOztnQkFDYixJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7O2dCQUNiLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQzs7Z0JBQ2IsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDOztnQkFFYixJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQzs7Z0JBQ3pDLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDOztnQkFDekMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksT0FBTyxDQUFDLENBQUM7O2dCQUMzQyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQztnQkFDM0MsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO2dCQUMxQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsYUFBYSxDQUFDLENBQUM7Z0JBRTNDLEtBQUssSUFBSSxFQUFFLEdBQUcsUUFBUSxFQUFFLEVBQUUsR0FBRyxPQUFPLEVBQUUsRUFBRSxFQUFFLEVBQUU7O29CQUN4QyxJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUM7O29CQUNsRCxJQUFNLFFBQVEsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDOztvQkFDN0IsSUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztvQkFDbkIsS0FBSyxJQUFJLEVBQUUsR0FBRyxRQUFRLEVBQUUsRUFBRSxHQUFHLE9BQU8sRUFBRSxFQUFFLEVBQUUsRUFBRTs7d0JBQ3hDLElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxHQUFHLFlBQVksQ0FBQzs7d0JBQ2xELElBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQzt3QkFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFOzs0QkFFUixTQUFTO3lCQUNaOzt3QkFFRCxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7d0JBQ3ZDLElBQU0sS0FBSyxHQUFHLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLFlBQVksQ0FBQyxDQUFDOzt3QkFFM0MsSUFBSSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUNqQyxhQUFhLElBQUksTUFBTSxDQUFDOzt3QkFFeEIsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUc7NEJBQ3JCLE1BQU0sR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7d0JBQzVDLElBQUksSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUM3QixJQUFJLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ2pDLElBQUksSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDakMsT0FBTyxJQUFJLE1BQU0sQ0FBQztxQkFDckI7aUJBQ0o7Z0JBQ0QsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksR0FBRyxPQUFPLENBQUM7Z0JBQzNCLEtBQUssQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLE9BQU8sQ0FBQztnQkFDL0IsS0FBSyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsT0FBTyxDQUFDO2dCQUMvQixLQUFLLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxhQUFhLENBQUM7YUFDeEM7U0FDSjs7UUFFRCxJQUFJLFlBQVksRUFBRTtZQUNkLE1BQU0sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1NBQzFCO2FBQ0k7WUFDRCxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsWUFBWSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1NBQ3BEOztRQUdELEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUNoQztDQUNKOzs7Ozs7QUFFRCwrQkFBc0MsU0FBaUIsRUFBRSxXQUFtQjtJQUN4RSxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07O1FBQy9CLElBQU0sR0FBRyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7UUFDeEIsR0FBRyxDQUFDLE1BQU0sR0FBRzs7WUFDVCxJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDOztZQUNoRCxJQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRXBDLElBQUksR0FBRyxFQUFFOztnQkFDTCxJQUFNLGlCQUFpQixHQUFHLEdBQUcsQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDOztnQkFDbkQsSUFBTSxrQkFBa0IsR0FBRyxHQUFHLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQztnQkFDbkQsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztnQkFDdEQsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsa0JBQWtCLENBQUMsQ0FBQzs7Z0JBQ3pELElBQU0sRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQzs7Z0JBQzFDLElBQU0sRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztnQkFDNUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUMzQixPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7YUFDL0I7aUJBQU07Z0JBQ0gsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7YUFDbkM7U0FDSixDQUFDO1FBQ0YsR0FBRyxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUM7S0FDdkIsQ0FBQyxDQUFDO0NBQ047Ozs7Ozs7SUN2QkcsK0JBQW9CLFNBQXVCLEVBQ3ZCLElBQ0E7UUFGQSxjQUFTLEdBQVQsU0FBUyxDQUFjO1FBQ3ZCLE9BQUUsR0FBRixFQUFFO1FBQ0YsU0FBSSxHQUFKLElBQUk7c0NBbEVTLENBQUM7cUNBQ0YsRUFBRTtzQ0FDRCxFQUFFOzBCQUdGLEtBQUs7NEJBQ3ZCLEtBQUs7c0JBMEJ1QyxLQUFLOzBCQUM5QixNQUFNO21DQUNULElBQUk7MkJBQ1osQ0FBQzs2QkFDQyxDQUFDOzhCQUNBLENBQUM7K0JBQ0EsQ0FBQztnQ0FDQSxDQUFDOzRCQUNMLEtBQUs7NkJBQ0osS0FBSzs0QkFDTixFQUFFO3dCQUNOLElBQUk7d0NBRVksS0FBSzt1QkFDTDtZQUNoQyxFQUFFLEVBQUUsQ0FBQyxHQUFHO1lBQ1IsRUFBRSxFQUFFLENBQUMsR0FBRztZQUNSLEVBQUUsRUFBRSxLQUFLO1lBQ1QsRUFBRSxFQUFFLEtBQUs7U0FDWjswQkFFd0MsUUFBUTs4QkFHdEIsSUFBSSxZQUFZLEVBQVE7NEJBQzFCLElBQUksWUFBWSxFQUFxQjtrQ0FDL0IsSUFBSSxZQUFZLEVBQVU7Z0NBQzVCLElBQUksWUFBWSxFQUFROzJCQUM3QixJQUFJLFlBQVksRUFBUTs0QkFDdkIsSUFBSSxZQUFZLEVBQVE7K0JBQ3JCLElBQUksWUFBWSxFQUFRO1FBS2hELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUN0QjtJQTFERCxzQkFDSSxtREFBZ0I7Ozs7O1FBRHBCLFVBQ3FCLElBQVU7WUFDM0IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLElBQUksSUFBSSxFQUFFO2dCQUNOLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDNUI7U0FDSjs7O09BQUE7SUFFRCxzQkFDSSxvREFBaUI7Ozs7O1FBRHJCLFVBQ3NCLEtBQVU7WUFDNUIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDOUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzdDO1NBQ0o7OztPQUFBO0lBRUQsc0JBQ0ksOENBQVc7Ozs7O1FBRGYsVUFDZ0IsV0FBbUI7WUFDL0IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNqRDs7O09BQUE7Ozs7O0lBd0NELDJDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUM5QixJQUFJLE9BQU8sYUFBVTtZQUNqQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7WUFDL0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQzFCO1FBQ0QsSUFBSSxPQUFPLG1CQUFnQixJQUFJLENBQUMsWUFBWSxFQUFFO1lBQzFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1NBQy9CO0tBQ0o7Ozs7SUFFTywyQ0FBVzs7OztRQUNmLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFCLElBQUksQ0FBQyxjQUFjLEdBQUcsa0NBQWtDO2NBQ2xELDJEQUEyRDtjQUMzRCwyQkFBMkIsQ0FBQztRQUNsQyxJQUFJLENBQUMsU0FBUyxHQUFHO1lBQ2IsTUFBTSxFQUFFLEtBQUs7WUFDYixJQUFJLEVBQUUsSUFBSTtZQUNWLFFBQVEsRUFBRSxJQUFJO1lBQ2QsRUFBRSxFQUFFLENBQUM7WUFDTCxFQUFFLEVBQUUsQ0FBQztZQUNMLEVBQUUsRUFBRSxDQUFDO1lBQ0wsRUFBRSxFQUFFLENBQUM7WUFDTCxPQUFPLEVBQUUsQ0FBQztZQUNWLE9BQU8sRUFBRSxDQUFDO1NBQ2IsQ0FBQztRQUNGLElBQUksQ0FBQyxPQUFPLEdBQUc7WUFDWCxLQUFLLEVBQUUsQ0FBQztZQUNSLE1BQU0sRUFBRSxDQUFDO1NBQ1osQ0FBQztRQUNGLElBQUksQ0FBQyxZQUFZLEdBQUc7WUFDaEIsS0FBSyxFQUFFLENBQUM7WUFDUixNQUFNLEVBQUUsQ0FBQztTQUNaLENBQUM7UUFDRixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDOzs7Ozs7SUFHcEIsNkNBQWE7Ozs7Y0FBQyxJQUFVOzs7UUFDNUIsSUFBTSxVQUFVLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztRQUNwQyxVQUFVLENBQUMsTUFBTSxHQUFHLFVBQUMsS0FBVTs7WUFDM0IsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUM1QixJQUFJLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsRUFBRTtnQkFDbEMsS0FBSSxDQUFDLDJCQUEyQixDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDekQ7aUJBQU07Z0JBQ0gsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUMvQjtTQUNKLENBQUM7UUFDRixVQUFVLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDOzs7Ozs7SUFHM0IsZ0RBQWdCOzs7O2NBQUMsSUFBWTtRQUNqQyxPQUFPLG9DQUFvQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7Ozs7O0lBR25ELDJEQUEyQjs7OztjQUFDLFdBQW1COztRQUNuRCxvQkFBb0IsQ0FBQyxXQUFXLENBQUM7YUFDNUIsSUFBSSxDQUFDLFVBQUMsWUFBb0IsSUFBSyxPQUFBLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsR0FBQSxDQUFDO2FBQ3hFLElBQUksQ0FBQyxVQUFDLFlBQW9CLElBQUssT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxHQUFBLENBQUM7YUFDbEUsS0FBSyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxHQUFBLENBQUMsQ0FBQzs7Ozs7O0lBRzFDLHFEQUFxQjs7OztjQUFDLFdBQW1CO1FBQzdDLE9BQU8sSUFBSSxDQUFDLHdCQUF3QjtjQUM5QixxQkFBcUIsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQztjQUNwRCxPQUFPLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDOzs7Ozs7SUFHL0IsK0NBQWU7Ozs7Y0FBQyxXQUFtQjs7UUFDdkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxXQUFXLENBQUM7UUFDbEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLDhCQUE4QixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pGLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRztZQUN4QixLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztZQUNuRCxLQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztZQUNyRCxLQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQzFCLENBQUM7UUFDRixJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsR0FBRyxXQUFXLENBQUM7Ozs7O0lBR3pDLGlEQUFpQjs7O0lBQWpCO1FBQUEsaUJBTUM7UUFMRyxJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxFQUFFO1lBQzVCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLHNCQUFzQixHQUFHLENBQUMsQ0FBQztZQUNoQyxVQUFVLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyw0QkFBNEIsRUFBRSxHQUFBLENBQUMsQ0FBQztTQUN6RDtLQUNKOzs7O0lBRU8sNERBQTRCOzs7OztRQUNoQyxJQUFJLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxFQUFFLEVBQUU7WUFDbEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUMvQjthQUFNLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxFQUFFO1lBQzdHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztZQUMvQixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztZQUM1QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDMUI7YUFBTTtZQUNILElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1lBQzlCLFVBQVUsQ0FBQztnQkFDUCxLQUFJLENBQUMsNEJBQTRCLEVBQUUsQ0FBQzthQUN2QyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ1Y7Ozs7O0lBSUwsd0NBQVE7OztJQURSO1FBRUksSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO0tBQ2xDOzs7O0lBRUQsMENBQVU7OztJQUFWO1FBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUMzQjs7OztJQUVELDJDQUFXOzs7SUFBWDtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDM0I7Ozs7SUFFRCw4Q0FBYzs7O0lBQWQ7UUFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzNCOzs7O0lBRUQsNENBQVk7OztJQUFaO1FBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUMzQjs7Ozs7SUFFTywrQ0FBZTs7OztjQUFDLGVBQXVCOztRQUMzQyxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDckIsa0NBQWtDLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxlQUFlLENBQUM7aUJBQ25FLElBQUksQ0FBQyxVQUFDLFlBQW9CLElBQUssT0FBQSxLQUFJLENBQUMscUJBQXFCLENBQUMsWUFBWSxDQUFDLEdBQUEsQ0FBQztpQkFDeEUsSUFBSSxDQUFDLFVBQUMsYUFBcUIsSUFBSyxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLEdBQUEsQ0FBQyxDQUFDO1NBQzdFOzs7OztJQUdHLHFEQUFxQjs7Ozs7UUFDekIsSUFBTSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQztRQUMxRCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxLQUFLLGtCQUFrQixDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUU7WUFDbEgsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsa0JBQWtCLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLGtCQUFrQixDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUN4RixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxrQkFBa0IsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDMUYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsa0JBQWtCLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1NBQzdGOzs7OztJQUdHLG9EQUFvQjs7Ozs7UUFDeEIsSUFBTSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQztRQUMxRCxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFO1lBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxrQkFBa0IsQ0FBQyxXQUFXLENBQUM7WUFDakQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLGtCQUFrQixDQUFDLFlBQVksQ0FBQztTQUNyRDthQUFNLElBQUksa0JBQWtCLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsa0JBQWtCLENBQUMsWUFBWSxFQUFFO1lBQzVGLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxrQkFBa0IsQ0FBQyxXQUFXLENBQUM7O1lBQ2pELElBQU0sYUFBYSxHQUFHLGtCQUFrQixDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ3hFLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLENBQUMsa0JBQWtCLENBQUMsWUFBWSxHQUFHLGFBQWEsSUFBSSxDQUFDLENBQUM7WUFDeEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsYUFBYSxDQUFDO1NBQ3JEO2FBQU07WUFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsa0JBQWtCLENBQUMsWUFBWSxDQUFDOztZQUNsRCxJQUFNLFlBQVksR0FBRyxrQkFBa0IsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUN4RSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxDQUFDLGtCQUFrQixDQUFDLFdBQVcsR0FBRyxZQUFZLElBQUksQ0FBQyxDQUFDO1lBQ3RFLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLFlBQVksQ0FBQztTQUNwRDtRQUNELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQzs7Ozs7Ozs7SUFHN0IseUNBQVM7Ozs7OztJQUFULFVBQVUsS0FBVSxFQUFFLFFBQWdCLEVBQUUsUUFBOEI7UUFBOUIseUJBQUEsRUFBQSxlQUE4QjtRQUNsRSxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsY0FDVixNQUFNLEVBQUUsSUFBSSxFQUNaLElBQUksRUFBRSxRQUFRLEVBQ2QsUUFBUSxVQUFBLEVBQ1IsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQy9CLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUM1QixJQUFJLENBQUMsT0FBTyxDQUNsQixDQUFDO0tBQ0w7Ozs7O0lBSUQsdUNBQU87Ozs7SUFGUCxVQUVRLEtBQVU7UUFDZCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN4QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdkIsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNuQztpQkFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtnQkFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDbkIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3BDO1lBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUMzQjtLQUNKOzs7O0lBRU8sMENBQVU7Ozs7O1FBQ2QsSUFBTSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQztRQUMxRCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxrQkFBa0IsQ0FBQyxXQUFXLENBQUM7UUFDcEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsa0JBQWtCLENBQUMsWUFBWSxDQUFDO1FBQ3RELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDOzs7OztJQUd0Ryx1REFBdUI7Ozs7UUFDM0IsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3BCLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1lBQ2hDLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO1NBQ3BDO2FBQU07WUFDSCxJQUFJLENBQUMscUJBQXFCLEdBQUcsRUFBRSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxFQUFFLENBQUM7U0FDcEM7Ozs7O0lBR0csd0RBQXdCOzs7O1FBQzVCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUM7Y0FDL0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztjQUNsRixFQUFFLENBQUM7Ozs7O0lBR0wseURBQXlCOzs7O1FBQzdCLElBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFO1lBQzFCLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzdGO2FBQU0sSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN2SDthQUFNO1lBQ0gsSUFBSSxDQUFDLHNCQUFzQixHQUFHLEVBQUUsQ0FBQztTQUNwQzs7Ozs7O0lBR0csb0RBQW9COzs7O2NBQUMsWUFBb0I7UUFBcEIsNkJBQUEsRUFBQSxvQkFBb0I7UUFDN0MsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUU7WUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUN0RCxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDdkI7UUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRTtZQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ3RELElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUN2QjtRQUNELElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUU7WUFDdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksWUFBWSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztZQUM3RSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztTQUN4QztRQUNELElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDdkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksWUFBWSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztZQUM5RSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztTQUN6Qzs7Ozs7SUFLTCx3Q0FBUTs7O0lBRlI7UUFHSSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUM5QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDckI7S0FDSjs7Ozs7SUFFTyxvQ0FBSTs7OztjQUFDLEtBQVU7O1FBQ25CLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7O1FBQzlELElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7UUFFOUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDO1FBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQztRQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUM7UUFDNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDOzs7Ozs7SUFHeEMsc0NBQU07Ozs7Y0FBQyxLQUFVOztRQUNyQixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDOztRQUM5RCxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDO1FBQzlELFFBQVEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRO1lBQzNCLEtBQUssTUFBTTtnQkFDUCxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztnQkFDcEcsTUFBTTtZQUNWLEtBQUssU0FBUztnQkFDVixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztnQkFDcEcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7Z0JBQ3JHLE1BQU07WUFDVixLQUFLLEtBQUs7Z0JBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7Z0JBQ3JHLE1BQU07WUFDVixLQUFLLFVBQVU7Z0JBQ1gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7Z0JBQ3BHLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO2dCQUNyRyxNQUFNO1lBQ1YsS0FBSyxPQUFPO2dCQUNSLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO2dCQUNwRyxNQUFNO1lBQ1YsS0FBSyxhQUFhO2dCQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO2dCQUNwRyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztnQkFDckcsTUFBTTtZQUNWLEtBQUssUUFBUTtnQkFDVCxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztnQkFDckcsTUFBTTtZQUNWLEtBQUssWUFBWTtnQkFDYixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztnQkFDcEcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7Z0JBQ3JHLE1BQU07U0FDYjtRQUVELElBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFO1lBQzFCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQzNCOzs7OztJQUdHLGdEQUFnQjs7Ozs7UUFDcEIsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDOztRQUNsQixJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFFbEIsUUFBUSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVE7WUFDM0IsS0FBSyxLQUFLO2dCQUNOLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQztnQkFDM0YsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzlELFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDN0MsSUFBSSxTQUFTLEdBQUcsQ0FBQyxJQUFJLFNBQVMsR0FBRyxDQUFDLEVBQUU7b0JBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLElBQUksU0FBUyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxJQUFJLFNBQVMsQ0FBQztvQkFDM0csSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxTQUFTLEdBQUcsU0FBUyxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO2lCQUM1RztnQkFDRCxNQUFNO1lBQ1YsS0FBSyxRQUFRO2dCQUNULElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQztnQkFDM0YsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzlELFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMvRCxJQUFJLFNBQVMsR0FBRyxDQUFDLElBQUksU0FBUyxHQUFHLENBQUMsRUFBRTtvQkFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxTQUFTLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLElBQUksU0FBUyxDQUFDO29CQUMzRyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxJQUFJLFNBQVMsR0FBRyxTQUFTLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztpQkFDOUc7Z0JBQ0QsTUFBTTtZQUNWLEtBQUssU0FBUztnQkFDVixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUM7Z0JBQzNGLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDN0MsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM3QyxJQUFJLFNBQVMsR0FBRyxDQUFDLElBQUksU0FBUyxHQUFHLENBQUMsRUFBRTtvQkFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxTQUFTLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLElBQUksU0FBUyxDQUFDO29CQUMzRyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxJQUFJLFNBQVMsR0FBRyxTQUFTLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7aUJBQzVHO2dCQUNELE1BQU07WUFDVixLQUFLLFVBQVU7Z0JBQ1gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDO2dCQUMzRixTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDOUQsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM3QyxJQUFJLFNBQVMsR0FBRyxDQUFDLElBQUksU0FBUyxHQUFHLENBQUMsRUFBRTtvQkFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxTQUFTLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLElBQUksU0FBUyxDQUFDO29CQUMzRyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxJQUFJLFNBQVMsR0FBRyxTQUFTLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7aUJBQzVHO2dCQUNELE1BQU07WUFDVixLQUFLLE9BQU8sQ0FBQztZQUNiLEtBQUssYUFBYTtnQkFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUM7Z0JBQzNGLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM5RCxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDL0QsSUFBSSxTQUFTLEdBQUcsQ0FBQyxJQUFJLFNBQVMsR0FBRyxDQUFDLEVBQUU7b0JBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLElBQUksU0FBUyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxJQUFJLFNBQVMsQ0FBQztvQkFDM0csSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxTQUFTLEdBQUcsU0FBUyxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO2lCQUM1RztnQkFDRCxNQUFNO1lBQ1YsS0FBSyxNQUFNLENBQUM7WUFDWixLQUFLLFlBQVk7Z0JBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDO2dCQUMzRixTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzdDLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMvRCxJQUFJLFNBQVMsR0FBRyxDQUFDLElBQUksU0FBUyxHQUFHLENBQUMsRUFBRTtvQkFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxTQUFTLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLElBQUksU0FBUyxDQUFDO29CQUMzRyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxJQUFJLFNBQVMsR0FBRyxTQUFTLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7aUJBQzVHO2dCQUNELE1BQU07U0FDYjs7Ozs7SUFHRywwQ0FBVTs7OztRQUNkLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNmLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNmOzs7Ozs7SUFHTCxvQ0FBSTs7OztJQUFKLFVBQUssVUFBd0M7UUFBeEMsMkJBQUEsRUFBQSxhQUF5QixJQUFJLENBQUMsVUFBVTtRQUN6QyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxFQUFFO1lBQzlELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7O1lBQzNCLElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDOztZQUM5QyxJQUFNLEtBQUssR0FBRyxhQUFhLENBQUMsRUFBRSxHQUFHLGFBQWEsQ0FBQyxFQUFFLENBQUM7O1lBQ2xELElBQU0sTUFBTSxHQUFHLGFBQWEsQ0FBQyxFQUFFLEdBQUcsYUFBYSxDQUFDLEVBQUUsQ0FBQzs7WUFFbkQsSUFBTSxVQUFVLHFCQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFzQixFQUFDO1lBQ3pFLFVBQVUsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLFVBQVUsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDOztZQUUzQixJQUFNLEdBQUcsR0FBRyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hDLElBQUksR0FBRyxFQUFFO2dCQUNMLElBQUksSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLEVBQUU7b0JBQzlCLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztvQkFDckMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztpQkFDckM7Z0JBQ0QsR0FBRyxDQUFDLFNBQVMsQ0FDVCxJQUFJLENBQUMsYUFBYSxFQUNsQixhQUFhLENBQUMsRUFBRSxFQUNoQixhQUFhLENBQUMsRUFBRSxFQUNoQixLQUFLLEVBQ0wsTUFBTSxFQUNOLENBQUMsRUFDRCxDQUFDLEVBQ0QsS0FBSyxFQUNMLE1BQU0sQ0FDVCxDQUFDOztnQkFDRixJQUFNLE1BQU0sR0FBRyxFQUFDLEtBQUssT0FBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLGFBQWEsZUFBQSxFQUFFLGVBQWUsZUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUMsQ0FBQzs7Z0JBQ2xGLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUN2RCxJQUFJLFdBQVcsS0FBSyxDQUFDLEVBQUU7b0JBQ25CLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLENBQUM7b0JBQy9DLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLG1CQUFtQjswQkFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7MEJBQzNDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQyxDQUFDO29CQUN2QyxZQUFZLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUN6RDtnQkFDRCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQ2hFO1NBQ0o7UUFDRCxPQUFPLElBQUksQ0FBQztLQUNmOzs7O0lBRU8sZ0RBQWdCOzs7OztRQUNwQixJQUFNLGtCQUFrQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDOztRQUMxRCxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssR0FBRyxrQkFBa0IsQ0FBQyxXQUFXLENBQUM7UUFDdkUsT0FBTztZQUNILEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQztZQUN2QyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUM7WUFDdkMsRUFBRSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztZQUMxRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDO1NBQzlFLENBQUM7Ozs7Ozs7O0lBR0UsZ0RBQWdCOzs7Ozs7Y0FBQyxVQUFzQixFQUFFLFVBQTZCLEVBQUUsTUFBeUI7O1FBQ3JHLFFBQVEsVUFBVTtZQUNkLEtBQUssTUFBTTtnQkFDUCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO3FCQUM3QixJQUFJLENBQUMsVUFBQyxNQUFtQjtvQkFDdEIsTUFBTSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7b0JBQ3JCLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUMvQixPQUFPLE1BQU0sQ0FBQztpQkFDakIsQ0FBQyxDQUFDO1lBQ1gsS0FBSyxNQUFNO2dCQUNQLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDOUMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQztxQkFDN0IsSUFBSSxDQUFDLFVBQUMsTUFBbUI7b0JBQ3RCLE1BQU0sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO29CQUNyQixLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDL0IsT0FBTyxNQUFNLENBQUM7aUJBQ2pCLENBQUMsQ0FBQztZQUNYO2dCQUNJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDOUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQy9CLE9BQU8sTUFBTSxDQUFDO1NBQ3JCOzs7Ozs7SUFHRyw0Q0FBWTs7OztjQUFDLFVBQTZCOztRQUM5QyxJQUFNLFdBQVcsR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDMUMsT0FBTyxXQUFXLENBQUM7Ozs7OztJQUdmLDBDQUFVOzs7O2NBQUMsVUFBNkI7O1FBQzVDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUM7YUFDaEMsSUFBSSxDQUFDLFVBQUMsTUFBbUI7WUFDdEIsSUFBSSxNQUFNLEVBQUU7Z0JBQ1IsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUN0QztZQUNELE9BQU8sTUFBTSxDQUFDO1NBQ2pCLENBQUMsQ0FBQzs7Ozs7O0lBR0gsNkNBQWE7Ozs7Y0FBQyxVQUE2Qjs7UUFDL0MsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU87WUFDdkIsVUFBVSxDQUFDLE1BQU0sQ0FDYixVQUFDLE1BQW1CLElBQUssT0FBQSxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFNLE9BQUEsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFBLENBQUMsR0FBQSxFQUM3RCxRQUFRLEdBQUcsS0FBSSxDQUFDLE1BQU0sRUFDdEIsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUNwQixDQUFDO1NBQ0wsQ0FBQyxDQUFDOzs7OztJQUdDLDBDQUFVOzs7O1FBQ2QsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7SUFHckQsOENBQWM7Ozs7O2NBQUMsS0FBYSxFQUFFLE1BQWM7UUFDaEQsSUFBSSxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsRUFBRTtZQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDbkQsT0FBTyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQzthQUNyQztTQUNKO2FBQU0sSUFBSSxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsRUFBRTtZQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRTtnQkFDckQsT0FBTyxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQzthQUN2QztTQUNKO1FBQ0QsT0FBTyxDQUFDLENBQUM7Ozs7OztJQUlMLDBDQUFVOzs7O2NBQUMsS0FBVTtRQUN6QixPQUFPLEtBQUssQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDOzs7Ozs7SUFHbEYsMENBQVU7Ozs7Y0FBQyxLQUFVO1FBQ3pCLE9BQU8sS0FBSyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7OztnQkFsbEI3RixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLDhxR0FBNkM7b0JBRTdDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztpQkFDbEQ7Ozs7Z0JBWlEsWUFBWTtnQkFGRixpQkFBaUI7Z0JBQTJCLE1BQU07Ozs4QkE2QmhFLFNBQVMsU0FBQyxhQUFhO21DQUV2QixLQUFLO29DQVFMLEtBQUs7OEJBUUwsS0FBSzt5QkFNTCxLQUFLOzZCQUNMLEtBQUs7c0NBQ0wsS0FBSzs4QkFDTCxLQUFLO2dDQUNMLEtBQUs7aUNBQ0wsS0FBSztrQ0FDTCxLQUFLO21DQUNMLEtBQUs7K0JBQ0wsS0FBSztnQ0FDTCxLQUFLOytCQUNMLEtBQUs7MkJBQ0wsS0FBSztrQ0FDTCxLQUFLOzJDQUNMLEtBQUs7MEJBQ0wsS0FBSzs2QkFNTCxXQUFXLFNBQUMsa0JBQWtCLGNBQzlCLEtBQUs7aUNBR0wsTUFBTTsrQkFDTixNQUFNO3FDQUNOLE1BQU07bUNBQ04sTUFBTTs4QkFDTixNQUFNOytCQUNOLE1BQU07a0NBQ04sTUFBTTsyQkF1SE4sWUFBWSxTQUFDLGVBQWU7MEJBNkU1QixZQUFZLFNBQUMsb0JBQW9CLEVBQUUsQ0FBQyxRQUFRLENBQUMsY0FDN0MsWUFBWSxTQUFDLG9CQUFvQixFQUFFLENBQUMsUUFBUSxDQUFDOzJCQW9FN0MsWUFBWSxTQUFDLGtCQUFrQixjQUMvQixZQUFZLFNBQUMsbUJBQW1COztnQ0EvVnJDOzs7Ozs7O0FDQUE7Ozs7Z0JBSUMsUUFBUSxTQUFDO29CQUNOLE9BQU8sRUFBRTt3QkFDTCxZQUFZO3FCQUNmO29CQUNELFlBQVksRUFBRTt3QkFDVixxQkFBcUI7cUJBQ3hCO29CQUNELE9BQU8sRUFBRTt3QkFDTCxxQkFBcUI7cUJBQ3hCO2lCQUNKOzs2QkFkRDs7Ozs7Ozs7Ozs7Ozs7OyJ9

/***/ }),

/***/ "./src/app/model/ClientModel.model.ts":
/*!********************************************!*\
  !*** ./src/app/model/ClientModel.model.ts ***!
  \********************************************/
/*! exports provided: Content, ClientCreateReq, ClientLicenseData, ClientUpdateReq, CountryData, UserData, AdminRoleData, AuthorityData, UserCreateReq, UserUpdateReq, UserCategoryUpdateReq, UserCommunityUpdateRequest, ClientCategoryUpdateReq, ClientData, LicenseUpdateReq, RoleData, CommunityData, CategoryData, LicenseUpdateRequest, profileUpdateReq, passwordUpdateReq, userImageReq */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientCreateReq", function() { return ClientCreateReq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientLicenseData", function() { return ClientLicenseData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientUpdateReq", function() { return ClientUpdateReq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryData", function() { return CountryData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserData", function() { return UserData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoleData", function() { return AdminRoleData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorityData", function() { return AuthorityData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCreateReq", function() { return UserCreateReq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserUpdateReq", function() { return UserUpdateReq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCategoryUpdateReq", function() { return UserCategoryUpdateReq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCommunityUpdateRequest", function() { return UserCommunityUpdateRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientCategoryUpdateReq", function() { return ClientCategoryUpdateReq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientData", function() { return ClientData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LicenseUpdateReq", function() { return LicenseUpdateReq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleData", function() { return RoleData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunityData", function() { return CommunityData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryData", function() { return CategoryData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LicenseUpdateRequest", function() { return LicenseUpdateRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileUpdateReq", function() { return profileUpdateReq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordUpdateReq", function() { return passwordUpdateReq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userImageReq", function() { return userImageReq; });
var Content = /** @class */ (function () {
    function Content(id, name) {
        this.id = id;
        this.name = name;
    }
    return Content;
}());

var ClientCreateReq = /** @class */ (function () {
    function ClientCreateReq(name, description, clientLogo, users, categories, license) {
        this.name = name;
        this.description = description;
        this.clientLogo = clientLogo;
        this.users = users;
        this.categories = categories;
        this.license = license;
    }
    return ClientCreateReq;
}());

var ClientLicenseData = /** @class */ (function () {
    function ClientLicenseData(tagCount, userCount, communityCount, feedbackCount, eventCount, promoCount) {
        this.tagCount = tagCount;
        this.userCount = userCount;
        this.communityCount = communityCount;
        this.feedbackCount = feedbackCount;
        this.eventCount = eventCount;
        this.promoCount = promoCount;
    }
    return ClientLicenseData;
}());

var ClientUpdateReq = /** @class */ (function () {
    function ClientUpdateReq(name, description, clientLogo, primaryContactNo, addressLine1, addressLine2, city, state, zipCode, country) {
        this.name = name;
        this.description = description;
        this.clientLogo = clientLogo;
        this.primaryContactNo = primaryContactNo;
        this.addressLine1 = addressLine1;
        this.addressLine2 = addressLine2;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.country = country;
    }
    return ClientUpdateReq;
}());

var CountryData = /** @class */ (function () {
    function CountryData(id) {
        this.id = id;
    }
    return CountryData;
}());

var UserData = /** @class */ (function () {
    function UserData(accountName, email, role) {
        this.accountName = accountName;
        this.email = email;
        this.role = role;
    }
    return UserData;
}());

var AdminRoleData = /** @class */ (function () {
    function AdminRoleData(name, description, authorities) {
        this.name = name;
        this.description = description;
        this.authorities = authorities;
    }
    return AdminRoleData;
}());

var AuthorityData = /** @class */ (function () {
    function AuthorityData(id) {
        this.id = id;
    }
    return AuthorityData;
}());

var UserCreateReq = /** @class */ (function () {
    function UserCreateReq(accountName, password, email, role, client, communities, categories) {
        this.accountName = accountName;
        this.password = password;
        this.email = email;
        this.role = role;
        this.client = client;
        this.communities = communities;
        this.categories = categories;
    }
    return UserCreateReq;
}());

var UserUpdateReq = /** @class */ (function () {
    function UserUpdateReq(accountName, email, role, status) {
        this.accountName = accountName;
        this.email = email;
        this.role = role;
        this.status = status;
    }
    return UserUpdateReq;
}());

var UserCategoryUpdateReq = /** @class */ (function () {
    function UserCategoryUpdateReq(categories) {
        this.categories = categories;
    }
    return UserCategoryUpdateReq;
}());

var UserCommunityUpdateRequest = /** @class */ (function () {
    function UserCommunityUpdateRequest(communities) {
        this.communities = communities;
    }
    return UserCommunityUpdateRequest;
}());

// export class UserCategoryUpdateReq {
//   constructor(
//     public accountName: string,
//     public email: string,
//     public role: RoleData,
//     public categories: CategoryData[]
//   ) { }
// }
var ClientCategoryUpdateReq = /** @class */ (function () {
    function ClientCategoryUpdateReq(categories) {
        this.categories = categories;
    }
    return ClientCategoryUpdateReq;
}());

var ClientData = /** @class */ (function () {
    function ClientData(id) {
        this.id = id;
    }
    return ClientData;
}());

var LicenseUpdateReq = /** @class */ (function () {
    function LicenseUpdateReq(tagCount, userCount, communityCount, feedbackCount, eventCount, promoCount, client) {
        this.tagCount = tagCount;
        this.userCount = userCount;
        this.communityCount = communityCount;
        this.feedbackCount = feedbackCount;
        this.eventCount = eventCount;
        this.promoCount = promoCount;
        this.client = client;
    }
    return LicenseUpdateReq;
}());

var RoleData = /** @class */ (function () {
    function RoleData(id) {
        this.id = id;
    }
    return RoleData;
}());

var CommunityData = /** @class */ (function () {
    function CommunityData(id) {
        this.id = id;
    }
    return CommunityData;
}());

var CategoryData = /** @class */ (function () {
    function CategoryData(id) {
        this.id = id;
    }
    return CategoryData;
}());

var LicenseUpdateRequest = /** @class */ (function () {
    function LicenseUpdateRequest(id) {
        this.id = id;
    }
    return LicenseUpdateRequest;
}());

var profileUpdateReq = /** @class */ (function () {
    function profileUpdateReq(id, accountName, email) {
        this.id = id;
        this.accountName = accountName;
        this.email = email;
    }
    return profileUpdateReq;
}());

var passwordUpdateReq = /** @class */ (function () {
    function passwordUpdateReq(id, password, newPassword) {
        this.id = id;
        this.password = password;
        this.newPassword = newPassword;
    }
    return passwordUpdateReq;
}());

var userImageReq = /** @class */ (function () {
    function userImageReq(id, imageContent, profileImage) {
        this.id = id;
        this.imageContent = imageContent;
        this.profileImage = profileImage;
    }
    return userImageReq;
}());



/***/ }),

/***/ "./src/app/shared/helpers/global-variable.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/helpers/global-variable.ts ***!
  \***************************************************/
/*! exports provided: GlobalVariable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalVariable", function() { return GlobalVariable; });
/**
  * Buddhi
  * DO NOT DELETE!
  */
var GlobalVariable = /** @class */ (function () {
    function GlobalVariable() {
        this.validators = {
            regex: {
                _Letter: '^(?:[A-Za-z]+)(?:[A-Za-z _]*)$',
                _PosNumber: '^[+]?([1-9]+(?:[0-9]*)?|\\.[0-9]+)$',
                _PosNumberAndLetter: '^(?:[A-Za-z0-9]+)(?:[A-Za-z0-9 ._-]*)$',
                _Password: '(?=(.*[a-zA-Z].*){2,})((?=.*\\d.*)|(?=.*[$@$!%*?&].*))[a-zA-Z\\d$@$!%*?&\\S]{8,20}'
            }
        };
        /**
          * Client License Max Limits
          */
        this.client = {
            license: { tagCount: 1000000, userCount: 1000, comunityCount: 100, feedbackCount: 1000, eventCount: 1000, promoCount: 1000 }
        };
        this.common = {
            matChip: {
                /**
                * Colors
                * primary / accent / warn / default
                */
                userStatusInUpdateUser: { true: "primary", false: "default" },
                clientStatus: {
                    A: { status: "Active", style: "primary", opposite: { value: "Inactive", icon: "block" } },
                    I: { status: "Inactive", style: "accent", opposite: { value: "Active", icon: "beenhere" } },
                    D: { status: "Deleted", style: "warn", opposite: { value: "Active", icon: "beenhere" } }
                },
                userStatus: {
                    ACTIVE: { code: "A", display: "ACTIVE", style: "primary" },
                    INACTIVE: { code: "I", display: "INACTIVE", style: "default" },
                    DELETED: { code: "D", display: "DELETED", style: "warn" },
                    PENDING_ACTIVATION: { code: "PEA", display: "PENDING", style: "default" },
                    TEMP_LOCKED_BAD_CREDENTIALS: { code: "TELBC", display: "LOCKED", style: "accent" }
                },
                colorForStatus01: {
                    'ACTIVE': "primary",
                    'INACTIVE': "default"
                },
                colorForSurveyStatus01: {
                    0: { id: 0, status: "On Premise", style: "accent" },
                    1: { id: 1, status: "Launched", style: "primary" },
                    4: { id: 4, status: "Offline", style: "default" }
                }
            },
            message: {
                confirmPasswordStatus: {
                    1: { value: "Password field must have at least 8 characters including at least two letters, one number or special character!", style: "custom-text-accent" },
                    2: { value: "Passwords Mismatch!", style: "custom-text-warn" }
                }
            }
        };
    }
    return GlobalVariable;
}());



/***/ }),

/***/ "./src/app/views/profile/account-settings/account-settings.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/views/profile/account-settings/account-settings.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\">\r\n  <form [formGroup]=\"accountSettingsForm\" (ngSubmit)=\"submit()\">\r\n    <mat-card-title>\r\n      <div class=\"card-title-text\">Account Details</div>\r\n      <mat-divider></mat-divider>\r\n\r\n    </mat-card-title>\r\n    <mat-card-content class=\"mat-typography mt-2\">\r\n\r\n\r\n      <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n\r\n        <div fxFlex=\"100\" class=\"pr-1\">\r\n          <mat-form-field class=\"full-width\">\r\n            <input matInput name=\"clientName\" [formControl]=\"accountSettingsForm.controls['name']\" letterOnly\r\n              placeholder=\"Name\">\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxFlex=\"100\" class=\"pr-1\">\r\n          <mat-form-field class=\"full-width\">\r\n            <textarea matInput name=\"description\" placeholder=\"Description\"\r\n              [formControl]=\"accountSettingsForm.controls['description']\"></textarea>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxFlex=\"50\" class=\"pr-1\">\r\n          <mat-form-field class=\"full-width\">\r\n            <input matInput name=\"contactNo\" [formControl]=\"accountSettingsForm.controls['contactNo']\"\r\n              placeholder=\"Contact No\">\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxFlex=\"50\" class=\"pr-1\">\r\n          <mat-form-field class=\"full-width\">\r\n            <input matInput name=\"addressLine1\" [formControl]=\"accountSettingsForm.controls['addressLine1']\"\r\n              placeholder=\"Address Line 1\">\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxFlex=\"50\" class=\"pr-1\">\r\n          <mat-form-field class=\"full-width\">\r\n            <input matInput name=\"addressLine2\" [formControl]=\"accountSettingsForm.controls['addressLine2']\"\r\n              placeholder=\"Address Line 2\">\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxFlex=\"50\" class=\"pr-1\">\r\n          <mat-form-field class=\"full-width\">\r\n            <input matInput name=\"city\" [formControl]=\"accountSettingsForm.controls['city']\" letterOnly\r\n              placeholder=\"City\">\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxFlex=\"50\" class=\"pr-1\">\r\n          <mat-form-field class=\"full-width\">\r\n            <input matInput name=\"state\" [formControl]=\"accountSettingsForm.controls['state']\"\r\n              positiveNumberAndLetterOnly placeholder=\"State\">\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxFlex=\"50\" class=\"pr-1\">\r\n          <mat-form-field class=\"full-width\">\r\n            <input matInput name=\"zipCode\" [formControl]=\"accountSettingsForm.controls['zipCode']\" positiveNumberOnly\r\n              placeholder=\"ZipCode\" maxlength=\"6\">\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxFlex=\"50\" class=\"pr-1\">\r\n          <mat-form-field class=\"full-width\">\r\n            <input matInput [formControl]=\"accountSettingsForm.controls['country']\" placeholder=\"Country\"  (focus)='loadCountryDD()'\r\n              [matAutocomplete]=\"auto\" (blur)=\"onBlurCountry()\">\r\n            <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\">\r\n              <mat-option *ngFor=\"let option of filteredCountries | async\" [value]=\"option.name\">\r\n                {{option.name}}\r\n              </mat-option>\r\n            </mat-autocomplete>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n\r\n        <!-- --------- hidden file input --------- -->\r\n        <input (change)=\"onSelectFile($event)\" #productImgs type=\"file\" style=\"display: none\"\r\n          [formControl]=\"accountSettingsForm.controls['profilePic']\" base-sixty-four-input>\r\n\r\n\r\n        <!-- --------- file input click button --------- -->\r\n        <!-- <div fxFlex=\"50\" class=\"pr-1\">\r\n          <div layout-margin layout-padding>\r\n            <button mat-raised-button class=\"mr-1 mb-1\" (click)=\"productImgs.click()\" type=\"button\">\r\n              Browse Images</button>\r\n          </div>\r\n        </div> -->\r\n\r\n        <div layout-margin layout-padding class=\"pr-1\">\r\n          <button mat-raised-button class=\"mr-1\" (click)=\"productImgs.click()\" type=\"button\">\r\n            Browse Images</button>\r\n          <button mat-raised-button class=\"mr-1\" (click)=\"removeSelectedImg()\" type=\"button\" *ngIf=\"url\">\r\n            Clear Images</button>\r\n        </div>\r\n\r\n\r\n        <!-- --------- start images preview container --------- -->\r\n        <div id=\"client_create_image_preview_container\" fxLayout=\"row\" fxLayoutWrap=\"wrap\" layout-align=\"center\">\r\n\r\n          <div [@animate]=\"{value:'*',params:{y:'50px',delay:'300ms'}}\" *ngIf=\"url\" fxFlex=\"100\" style=\"display: flex;\">\r\n\r\n            <img class=\"clientProfilePic\" [src]=\"url\" (error)=\"removeSelectedImg()\">\r\n\r\n          </div>\r\n\r\n        </div>\r\n        <!-- --------- end images preview container --------- -->\r\n\r\n\r\n      </div>\r\n\r\n      <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n        <div fxFlex=\"100\" class=\"mt-1\">\r\n          <!-- <button mat-raised-button type=\"submit\" color=\"primary\" [disabled]=\"\">Save</button> -->\r\n          <button mat-raised-button type=\"submit\" color=\"primary\" [disabled]=\"accountSettingsForm.invalid || !url\">Save</button>\r\n        </div>\r\n      </div>\r\n\r\n    </mat-card-content>\r\n\r\n  </form>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/views/profile/account-settings/account-settings.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/views/profile/account-settings/account-settings.component.ts ***!
  \******************************************************************************/
/*! exports provided: AccountSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountSettingsComponent", function() { return AccountSettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../profile.service */ "./src/app/views/profile/profile.service.ts");
/* harmony import */ var app_model_ClientModel_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/model/ClientModel.model */ "./src/app/model/ClientModel.model.ts");
/* harmony import */ var app_shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/app-loader/app-loader.service */ "./src/app/shared/services/app-loader/app-loader.service.ts");
/* harmony import */ var app_shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/services/app-error/app-error.service */ "./src/app/shared/services/app-error/app-error.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var app_views_sessions_authentication_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/views/sessions/authentication.service */ "./src/app/views/sessions/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};











var AccountSettingsComponent = /** @class */ (function () {
    function AccountSettingsComponent(fb, profileService, loader, snack, errDialog, snackBar, authService) {
        this.fb = fb;
        this.profileService = profileService;
        this.loader = loader;
        this.snack = snack;
        this.errDialog = errDialog;
        this.snackBar = snackBar;
        this.authService = authService;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploader"]({ url: 'upload_url' });
        this.imgBaseURL = 'http://localhost:10000/api/downloads/client/';
    }
    AccountSettingsComponent.prototype.ngOnInit = function () {
        var currentUser = this.authService.getLoggedUserDetail();
        this.clientId = currentUser.userData.client.id;
        this.buildItemForm();
        this.getClient();
        this.getCountry();
    };
    AccountSettingsComponent.prototype.buildItemForm = function () {
        this.accountSettingsForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            profilePic: [''],
            contactNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            addressLine1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            addressLine2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            zipCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    AccountSettingsComponent.prototype.getClient = function () {
        var _this = this;
        this.profileService.getClient(this.clientId).subscribe(function (successResp) {
            var data = successResp.content;
            _this.accountSettingsForm.patchValue({
                name: data.name,
                description: data.description,
                contactNo: data.primaryContactNo,
                addressLine1: data.addressLine1,
                addressLine2: data.addressLine2,
                city: data.city,
                state: data.state,
                zipCode: data.zipCode,
                country: data.country != null ? data.country.name : ''
            });
            _this.selectedCountry = data.country != null ? data.country.id : '';
            _this.onBlurCountry();
            getBase64ImageFromUrl(_this.imgBaseURL + _this.clientId)
                .then(function (result) { return _this.url = result; })
                .catch(function (err) { return console.error(err); });
        }, function (error) {
            _this.errDialog.showError(error);
        });
    };
    AccountSettingsComponent.prototype.getCountry = function () {
        var _this = this;
        this.profileService.getCountry().subscribe(function (successResp) {
            _this.countries = successResp.content;
            _this.filteredCountries = _this.accountSettingsForm.get("country").valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (value) { return _this._filter(value); }));
        }, function (error) {
            _this.errDialog.showError(error);
        });
    };
    AccountSettingsComponent.prototype.submit = function () {
        var _this = this;
        var country = new app_model_ClientModel_model__WEBPACK_IMPORTED_MODULE_4__["CountryData"](this.selectedCountry);
        var req = new app_model_ClientModel_model__WEBPACK_IMPORTED_MODULE_4__["ClientUpdateReq"](this.accountSettingsForm.get('name').value, this.accountSettingsForm.get('description').value, this.url, this.accountSettingsForm.get('contactNo').value, this.accountSettingsForm.get('addressLine1').value, this.accountSettingsForm.get('addressLine2').value, this.accountSettingsForm.get('city').value, this.accountSettingsForm.get('state').value, this.accountSettingsForm.get('zipCode').value, country);
        this.profileService.updateClientDetails(this.clientId, req).subscribe(function (response) {
            _this.snack.open("Client Details Updated!", "OK", { duration: 4000 });
        }, function (error) {
            _this.loader.close();
            _this.errDialog.showError(error);
        });
    };
    //  ----------------------- Account Setting ---------------------------------------------------------
    AccountSettingsComponent.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.countries.filter(function (option) { return option.name.toLowerCase().indexOf(filterValue) === 0; });
    };
    // File uploader validation and upload
    AccountSettingsComponent.prototype.onSelectFile = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var file = event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0];
            var pattern = /image-*/;
            var reader = new FileReader();
            if (!file.type.match(pattern)) {
                this.snackBar.open("Invalid Format!", "close", { duration: 2000 });
                return;
            }
            reader.onload = function (event) {
                _this.url = event.target.result;
                console.log(_this.url);
            };
            reader.readAsDataURL(file);
        }
        else {
            this.snackBar.open("Can't upload", "close", { duration: 2000 });
        }
    };
    AccountSettingsComponent.prototype.removeSelectedImg = function () {
        this.url = null;
        this.accountSettingsForm.controls['profilePic'].setValue('');
    };
    AccountSettingsComponent.prototype.onBlurCountry = function () {
        var _this = this;
        var value = this.accountSettingsForm.get("country").value;
        var status = true;
        this.countries.forEach(function (element) {
            if (element.name === value) {
                _this.selectedCountry = element.id;
                status = false;
            }
        });
        if (status) {
            this.selectedCountry = null;
            this.accountSettingsForm.get("country").setValue("");
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('categoryInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AccountSettingsComponent.prototype, "categoryInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('auto'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocomplete"])
    ], AccountSettingsComponent.prototype, "matAutocomplete", void 0);
    AccountSettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account-settings',
            template: __webpack_require__(/*! ./account-settings.component.html */ "./src/app/views/profile/account-settings/account-settings.component.html"),
            animations: app_shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_8__["egretAnimations"],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"],
            app_shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_5__["AppLoaderService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"],
            app_shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_6__["AppErrorService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"],
            app_views_sessions_authentication_service__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"]])
    ], AccountSettingsComponent);
    return AccountSettingsComponent;
}());

function getBase64ImageFromUrl(imageUrl) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        var res, blob;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(imageUrl)];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.blob()];
                case 2:
                    blob = _a.sent();
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            var reader = new FileReader();
                            reader.addEventListener("load", function () {
                                resolve(reader.result);
                            }, false);
                            reader.onerror = function () {
                                return reject(_this);
                            };
                            reader.readAsDataURL(blob);
                        })];
            }
        });
    });
}


/***/ }),

/***/ "./src/app/views/profile/profile-blank/profile-blank.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/views/profile/profile-blank/profile-blank.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Byb2ZpbGUvcHJvZmlsZS1ibGFuay9wcm9maWxlLWJsYW5rLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/profile/profile-blank/profile-blank.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/views/profile/profile-blank/profile-blank.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  profile-blank works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/views/profile/profile-blank/profile-blank.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/views/profile/profile-blank/profile-blank.component.ts ***!
  \************************************************************************/
/*! exports provided: ProfileBlankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileBlankComponent", function() { return ProfileBlankComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileBlankComponent = /** @class */ (function () {
    function ProfileBlankComponent() {
    }
    ProfileBlankComponent.prototype.ngOnInit = function () {
    };
    ProfileBlankComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile-blank',
            template: __webpack_require__(/*! ./profile-blank.component.html */ "./src/app/views/profile/profile-blank/profile-blank.component.html"),
            styles: [__webpack_require__(/*! ./profile-blank.component.css */ "./src/app/views/profile/profile-blank/profile-blank.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileBlankComponent);
    return ProfileBlankComponent;
}());



/***/ }),

/***/ "./src/app/views/profile/profile-license/profile-license.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/views/profile/profile-license/profile-license.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<mat-card class=\"p-0\">\r\n  <mat-tab-group>\r\n\r\n\r\n\r\n\r\n    <!-- <mat-tab label=\"Update License\">\r\n      <mat-card-content class=\"mt-3\">\r\n        <form [formGroup]=\"licenseFormGroup\"  (ngSubmit)=\"submitLicense()\" class=\"\">\r\n\r\n          <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\" mt-1\">\r\n\r\n            <div fxFlex=\"50\" class=\"pr-1\">\r\n              <mat-form-field class=\"full-width\">\r\n                <input matInput name=\"tagCount\" placeholder=\"Tag Count\" positiveNumberOnly\r\n                  [formControl]=\"licenseFormGroup.controls['tagCount']\">\r\n              </mat-form-field>\r\n              <span *ngIf=\"licenseFormGroup.controls['tagCount'].hasError('max')\" class=\"form-error-msg\">\r\n                {{this.license.tagCount}} max ! </span>\r\n            </div>\r\n\r\n            <div fxFlex=\"50\" class=\"pr-1\">\r\n              <mat-form-field class=\"full-width\">\r\n                <input matInput name=\"userCount\" placeholder=\"User Count\" positiveNumberOnly\r\n                  [formControl]=\"licenseFormGroup.controls['userCount']\">\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div fxFlex=\"50\" class=\"pr-1\">\r\n              <mat-form-field class=\"full-width\">\r\n                <input matInput name=\"communityCount\" placeholder=\"Community Count\" positiveNumberOnly\r\n                  [formControl]=\"licenseFormGroup.controls['communityCount']\" (blur)=\"validateLicense()\"\r\n                  (focus)='setOldValue()'>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div fxFlex=\"50\" class=\"pr-1\">\r\n              <mat-form-field class=\"full-width\">\r\n                <input matInput name=\"feedbackCount\" placeholder=\"Feedback Count\" positiveNumberOnly\r\n                  [formControl]=\"licenseFormGroup.controls['feedbackCount']\" (blur)=\"setDefaultValue('feedbackCount')\">\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div fxFlex=\"50\" class=\"pr-1\">\r\n              <mat-form-field class=\"full-width\">\r\n                <input matInput name=\"eventkCount\" placeholder=\"Event Count\" positiveNumberOnly\r\n                  [formControl]=\"licenseFormGroup.controls['eventCount']\" (blur)=\"setDefaultValue('eventCount')\">\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div fxFlex=\"50\" class=\"pr-1\">\r\n              <mat-form-field class=\"full-width\">\r\n                <input matInput name=\"promoCount\" placeholder=\"Promo Count\" positiveNumberOnly\r\n                  [formControl]=\"licenseFormGroup.controls['promoCount']\" (blur)=\"setDefaultValue('promoCount')\">\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n\r\n          <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n            <div fxFlex=\"100\" class=\"mt-1\">\r\n              <button mat-raised-button color=\"primary\" [disabled]=\"licenseFormGroup.invalid\" (click)=\"updateLicense()\">Save</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </mat-card-content>\r\n    </mat-tab> -->\r\n\r\n\r\n    <mat-tab label=\"Category\">\r\n      <mat-card-content class=\"mt-3\">\r\n        <form [formGroup]=\"categoryFormGroup\">\r\n          <ng-template matStepLabel>Category</ng-template>\r\n\r\n          <mat-form-field class=\"matAutocomplete-chip-list\">\r\n\r\n            <mat-chip-list #chipList>\r\n              <mat-chip *ngFor=\"let category of selectedCategories\" [selectable]=\"selectable\" [removable]=\"removable\"\r\n                (removed)=\"remove(category)\">\r\n                {{category.name}}\r\n                <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n              </mat-chip>\r\n              <input matInput placeholder=\"Select category...\" #categoryInput [formControl]=\"categoryCtrl\" [matAutocomplete]=\"auto\"\r\n                [matChipInputFor]=\"chipList\" [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\" (focus) = \"onFocusCategoryDD()\"\r\n                (matChipInputTokenEnd)=\"add($event)\" [matChipInputAddOnBlur]=\"addOnBlur\" aria-label=\"Category\">\r\n            </mat-chip-list>    \r\n        \r\n            <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\r\n              <mat-option *ngFor=\"let category of filteredCategories | async\" [value]=\"category.id\">\r\n                <span>{{category.name}}</span>\r\n              </mat-option>\r\n            </mat-autocomplete>\r\n        \r\n          </mat-form-field>\r\n\r\n          <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n            <div fxFlex=\"100\" class=\"mt-1\">\r\n              <button mat-raised-button color=\"primary\" matStepperNext [disabled]='categoryFormStatus' (click)=\"updateCategory()\">Save</button>\r\n              <span fxFlex></span>\r\n              <button mat-button color=\"warn\" type=\"button\" (click)=\"dialogRef.close(false)\">Cancel</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </mat-card-content>\r\n    </mat-tab>\r\n\r\n\r\n\r\n\r\n\r\n  </mat-tab-group>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/views/profile/profile-license/profile-license.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/views/profile/profile-license/profile-license.component.ts ***!
  \****************************************************************************/
/*! exports provided: ProfileLicenseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileLicenseComponent", function() { return ProfileLicenseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile.service */ "./src/app/views/profile/profile.service.ts");
/* harmony import */ var app_model_ClientModel_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/model/ClientModel.model */ "./src/app/model/ClientModel.model.ts");
/* harmony import */ var app_shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/app-loader/app-loader.service */ "./src/app/shared/services/app-loader/app-loader.service.ts");
/* harmony import */ var app_shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/app-error/app-error.service */ "./src/app/shared/services/app-error/app-error.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var app_views_sessions_authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/views/sessions/authentication.service */ "./src/app/views/sessions/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ProfileLicenseComponent = /** @class */ (function () {
    function ProfileLicenseComponent(fb, snackBar, profileService, errDialog, loader, snack, authService) {
        this.fb = fb;
        this.snackBar = snackBar;
        this.profileService = profileService;
        this.errDialog = errDialog;
        this.loader = loader;
        this.snack = snack;
        this.authService = authService;
        // public globalVariable: GlobalVariable = new GlobalVariable();
        // public license = this.globalVariable.client.license;
        // public regex = this.globalVariable.validators.regex;
        // public licenseFormGroup: FormGroup;
        this.formStatus = false;
        this.oldestValue = 0;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["COMMA"]];
        this.categoryCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.allCategories = [];
        this.selectedCategories = [];
    }
    ProfileLicenseComponent.prototype.ngOnInit = function () {
        var currentUser = this.authService.getLoggedUserDetail();
        this.clientId = currentUser.userData.client.id;
        this.getCategory();
        this.getClientCategory();
        this.buildItemForm();
        // this.buildItemForm(this.data.payload.license)
    };
    ProfileLicenseComponent.prototype.buildItemForm = function () {
        // this.licenseFormGroup = this.fb.group({
        //   tagCount: ['', Validators.required],
        //   userCount: ['', Validators.required],
        //   communityCount: ['', Validators.required],
        //   feedbackCount: ['', Validators.required],
        //   eventCount: ['', Validators.required],
        //   promoCount: ['', Validators.required]
        // });
        this.categoryFormGroup = this.fb.group({
            category: this.categoryCtrl
        });
        // this.getClient();
    };
    ProfileLicenseComponent.prototype.getCategory = function () {
        var _this = this;
        this.profileService.getCategory().subscribe(function (successResp) {
            _this.allCategories = successResp.content;
        }, function (error) {
            _this.errDialog.showError(error);
        });
    };
    ProfileLicenseComponent.prototype.getClientCategory = function () {
        var _this = this;
        this.profileService.getClientCategories(this.clientId).subscribe(function (successResp) {
            successResp.content.forEach(function (element) {
                _this.addSelectedCategory(element.id);
            });
        }, function (error) {
            _this.errDialog.showError(error);
        });
    };
    // getClient() {
    //   this.getItemSub = this.profileService.getClient(this.clientId).subscribe(successResp => {
    //     this.license = successResp.content.license;
    //     this.licenseFormGroup.patchValue({
    //       tagCount: this.license.tagCount,
    //       userCount: this.license.userCount,
    //       communityCount: this.license.communityCount,
    //       feedbackCount: this.license.feedbackCount,
    //       eventCount: this.license.eventCount,
    //       promoCount: this.license.promoCount
    //     });
    //   },
    //     error => {
    //       this.errDialog.showError({
    //         title: "Error",
    //         status: error.status,
    //         type: "http_error"
    //       });
    //     }
    //   );
    // }
    // setOldValue() {
    //   this.oldestValue = this.licenseFormGroup.controls['communityCount'].value;
    // }
    // validateLicense() {
    //   let form = this.licenseFormGroup;
    //   if (form.controls['communityCount'].value !== '') {
    //     let value = form.controls['communityCount'].value;
    //     let diff;
    //     if (value > this.oldestValue) {
    //       diff = value - this.oldestValue;
    //       form.controls['feedbackCount'].setValue(+(form.get('feedbackCount').value) + diff);
    //       form.controls['eventCount'].setValue(+(form.get('eventCount').value) + diff);
    //       form.controls['promoCount'].setValue(+(form.get('promoCount').value) + diff);
    //     }
    //   } else {
    //     form.controls['communityCount'].setValue(1)
    //     form.controls['feedbackCount'].setValue(1)
    //     form.controls['eventCount'].setValue(1)
    //     form.controls['promoCount'].setValue(1)
    //   }
    // }
    // setDefaultValue(control) {
    //   let form = this.licenseFormGroup;
    //   if (form.controls[control].value === '') {
    //     form.controls[control].setValue(1);
    //   }
    // }
    // updateLicense() {
    //   let form = this.licenseFormGroup;
    //   let clientData: ClientData = new ClientData(this.clientId);
    //   const req: LicenseUpdateReq = new LicenseUpdateReq(form.get('tagCount').value, form.get('userCount').value, form.get('communityCount').value, form.get('feedbackCount').value, form.get('eventCount').value, form.get('promoCount').value, clientData);
    //   this.profileService.updateClientLicense(this.license.id, req).subscribe(
    //     response => {
    //       this.snack.open("License Data Updated !", "OK", { duration: 4000 });
    //       // this.getClients();
    //       // this.clients = response;
    //       // this.loader.close();
    //       // this.snack.open("License Data Updated !", "OK", { duration: 4000 });
    //     },
    //     error => {
    //       this.errDialog.showError({
    //         title: "Error",
    //         status: error.status,
    //         type: "http_error"
    //       });
    //     }
    //   );
    // }
    //  ----------------------- Categoty Setting --------------------------------------------------------
    ProfileLicenseComponent.prototype.onFocusCategoryDD = function () {
        var _this = this;
        this.filteredCategories = this.categoryCtrl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (category) { return category ? _this._filterCategories(category) : _this.allCategories.slice(); }));
    };
    ProfileLicenseComponent.prototype.updateCategory = function () {
        var _this = this;
        console.log('---------------------- Category ', this.selectedCategories);
        var categories = [];
        this.selectedCategories.forEach(function (element) {
            categories.push(new app_model_ClientModel_model__WEBPACK_IMPORTED_MODULE_3__["CategoryData"](element.id));
        });
        var req = new app_model_ClientModel_model__WEBPACK_IMPORTED_MODULE_3__["ClientCategoryUpdateReq"](categories);
        this.loader.open();
        this.profileService.updateClientCategory(this.clientId, req).subscribe(function (response) {
            _this.loader.close();
            _this.snack.open("Client Category Updated!", "OK", { duration: 4000 });
        }, function (error) {
            _this.loader.close();
            _this.errDialog.showError({
                title: "Error",
                status: error.status,
                type: "http_error"
            });
        });
    };
    ProfileLicenseComponent.prototype.add = function (event) {
        if (!this.matAutocomplete.isOpen) {
            var input = event.input;
            var value = event.value;
            // if we need to add custom texts as Chips,
            // Add our category
            // if ((value || '').trim()) {
            //   this.categories.push(value.trim());
            // }
            // Reset the input value
            if (input) {
                input.value = '';
            }
            this.categoryCtrl.setValue(null);
        }
    };
    ProfileLicenseComponent.prototype.selected = function (event) {
        this.addSelectedCategory(event.option.value);
        this.categoryInput.nativeElement.value = '';
        this.categoryCtrl.setValue(null);
    };
    ProfileLicenseComponent.prototype.addSelectedCategory = function (id) {
        var _this = this;
        this.allCategories.forEach(function (item, index) {
            if (item.id === id) {
                _this.selectedCategories.push(item);
                _this.allCategories.splice(index, 1);
            }
        });
    };
    ProfileLicenseComponent.prototype.remove = function (category) {
        var _this = this;
        this.selectedCategories.forEach(function (item, index) {
            if (item.id === category.id) {
                _this.allCategories.push(category);
                _this.selectedCategories.splice(index, 1);
            }
        });
    };
    ProfileLicenseComponent.prototype._filterCategories = function (value) {
        var filterValue = value.toLowerCase();
        return this.allCategories.filter(function (category) { return category.name.toLowerCase().indexOf(filterValue) === 0; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('categoryInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ProfileLicenseComponent.prototype, "categoryInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('auto'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatAutocomplete"])
    ], ProfileLicenseComponent.prototype, "matAutocomplete", void 0);
    ProfileLicenseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile-license',
            template: __webpack_require__(/*! ./profile-license.component.html */ "./src/app/views/profile/profile-license/profile-license.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"],
            _profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"],
            app_shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_5__["AppErrorService"],
            app_shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_4__["AppLoaderService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"],
            app_views_sessions_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"]])
    ], ProfileLicenseComponent);
    return ProfileLicenseComponent;
}());



/***/ }),

/***/ "./src/app/views/profile/profile-overview/profile-overview.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/views/profile/profile-overview/profile-overview.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Byb2ZpbGUvcHJvZmlsZS1vdmVydmlldy9wcm9maWxlLW92ZXJ2aWV3LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/profile/profile-overview/profile-overview.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/views/profile/profile-overview/profile-overview.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\r\n  <div fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-md=\"50\">\r\n    <!-- Time line -->\r\n    <mat-card class=\"default\">\r\n      <mat-card-title>Timeline</mat-card-title>\r\n      <mat-card-content>\r\n        <div class=\"timeline\">\r\n          <div class=\"timeline-item\">\r\n            <div class=\"timeline-badge\">\r\n              <img src=\"assets/images/face-6.jpg\" alt=\"\">\r\n            </div>\r\n            <div class=\"timeline-body\">\r\n              <div class=\"timeline-body-top\" fxLayout=\"row\">\r\n                <a href=\"#\" class=\"timeline-body-title mr-1\"><b>Jhone Doe</b> updated his status</a>\r\n                <span class=\"text-muted\">1 hour ago</span>\r\n                <span fxFlex></span>\r\n              </div>\r\n              <div class=\"timeline-body-content\">\r\n                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem necessitatibus natus fugit porro at sunt mollitia repellendus deserunt, libero similique.</p>\r\n              </div>\r\n              <div class=\"timeline-body-actions\">\r\n                <a href=\"#\" class=\"mr-1 text-muted\">Like</a>\r\n                <a href=\"#\" class=\"text-muted\">Comment</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"timeline-item\">\r\n            <div class=\"timeline-badge\">\r\n              <img src=\"assets/images/face-2.jpg\" alt=\"\">\r\n            </div>\r\n            <div class=\"timeline-body\">\r\n              <div class=\"timeline-body-top\" fxLayout=\"row\">\r\n                <a href=\"#\" class=\"timeline-body-title mr-1\"><b>Henry krick</b> added a new photo</a>\r\n                <span class=\"text-muted\">15 hours ago</span>\r\n                <span fxFlex></span>\r\n              </div>\r\n              <div class=\"timeline-body-content\">\r\n                <img src=\"assets/images/photo-600_220.jpg\" alt=\"\">\r\n              </div>\r\n              <div class=\"timeline-body-actions\">\r\n                <a href=\"#\" class=\"mr-1 text-muted\">Like</a>\r\n                <a href=\"#\" class=\"text-muted\">Comment</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"timeline-item\">\r\n            <div class=\"timeline-badge\">\r\n              <mat-icon class=\"icon-badge mat-bg-primary\">settings</mat-icon>\r\n            </div>\r\n            <div class=\"timeline-body\">\r\n              <div class=\"timeline-body-top\" fxLayout=\"row\">\r\n                <a href=\"#\" class=\"timeline-body-title mr-1\"><b>New follower</b></a>\r\n                <span class=\"text-muted\">2 days ago</span>\r\n                <span fxFlex></span>\r\n              </div>\r\n              <div class=\"timeline-body-content\">\r\n                <p><a class=\"mat-color-primary\" href=\"\">Kevin Huyn</a> and 34 others followed you.</p>\r\n              </div>\r\n              <div class=\"timeline-body-actions\">\r\n                <a href=\"#\" class=\"mr-1 text-muted\">Like</a>\r\n                <a href=\"#\" class=\"text-muted\">Comment</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"timeline-item\">\r\n            <div class=\"timeline-badge\">\r\n              <mat-icon class=\"icon-badge mat-bg-warn\">settings</mat-icon>\r\n            </div>\r\n            <div class=\"timeline-body\">\r\n              <div class=\"timeline-body-top\" fxLayout=\"row\">\r\n                <a href=\"#\" class=\"timeline-body-title mr-1\"><b>Membership upgraded</b></a>\r\n                <span class=\"text-muted\">5 days ago</span>\r\n                <span fxFlex></span>\r\n              </div>\r\n              <div class=\"timeline-body-content\">\r\n                <p>Membership has been upgraded to pro</p>\r\n              </div>\r\n              <div class=\"timeline-body-actions\">\r\n                <a href=\"#\" class=\"mr-1 text-muted\">Like</a>\r\n                <a href=\"#\" class=\"text-muted\">Comment</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n    <!-- End Time line -->\r\n\r\n    <mat-card class=\"default\">\r\n      <mat-card-title>Uploaded Photos</mat-card-title>\r\n      <mat-card-content class=\"p-0\">\r\n          <mat-grid-list cols=\"3\" rowHeight=\"1:1\" class=\"app-gallery\">\r\n              <!-- Gallery item -->\r\n              <mat-grid-tile *ngFor=\"let photo of photos\">\r\n                <img [src]=\"photo.url\" alt=\"\">\r\n                <!-- item detail, show on hover -->\r\n                <div class=\"gallery-control-wrap\">\r\n                  <div class=\"gallery-control\">\r\n                    <h4 class=\"photo-detail fz-1\" [fxHide.lt-sm]=\"true\">{{photo.name}}</h4>\r\n                    <span fxFlex></span>\r\n                    <button mat-icon-button [matMenuTriggerFor]=\"photoMenu\" class=\"\">\r\n                      <mat-icon>more_vert</mat-icon>\r\n                    </button>\r\n                    <mat-menu #photoMenu=\"matMenu\">\r\n                      <button mat-menu-item><mat-icon>send</mat-icon>Send as attachment</button>\r\n                      <button mat-menu-item><mat-icon>favorite</mat-icon>Favorite</button>\r\n                      <button mat-menu-item><mat-icon>delete</mat-icon>Delete</button>\r\n                    </mat-menu>\r\n                  </div>\r\n                </div>\r\n              </mat-grid-tile>\r\n            </mat-grid-list>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n\r\n  <div fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-md=\"50\">\r\n    <mat-card class=\"default\">\r\n      <mat-card-title>Support Tickets</mat-card-title>\r\n      <mat-card-content class=\"p-0\">\r\n        <mat-list class=\"compact-list mb-1\">\r\n          <mat-list-item class=\"\" *ngFor=\"let t of tickets\">\r\n            <img mat-list-avatar class=\"mr-1\" [src]=\"t.img\" alt=\"\">\r\n            <div fxLayout=\"row\" fxFlex=\"100\">\r\n              <h6 class=\"m-0 mr-1\">{{t.name}}</h6>\r\n              <span fxFlex></span>\r\n              <div fxFlex=\"40\">{{t.text | excerpt:20 }}</div>\r\n              <span fxFlex></span>\r\n              <small class=\"text-muted mr-1 ml-1\">{{ t.date | relativeTime}}</small>\r\n            </div>\r\n            <mat-chip mat-sm-chip [color]=\"'warn'\" [selected]=\"t.isOpen\">{{t.isOpen ? 'active' : 'closed'}}</mat-chip>\r\n          </mat-list-item>\r\n        </mat-list>\r\n        <div class=\"text-right\">\r\n          <button mat-button class=\"full-width\">View all</button>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card class=\"default\">\r\n      <mat-card-title>Assigned Tasks</mat-card-title>\r\n      <mat-card-content class=\"p-0\">\r\n        <div class=\"list-tasktype\">\r\n          <div class=\"tasktype-item\" *ngFor=\"let t of tasks\">\r\n            <mat-checkbox class=\"mr-1\"></mat-checkbox>\r\n            <span>{{t.text}}</span>\r\n            <span fxFlex></span>\r\n            <mat-chip mat-sm-chip color=\"primary\" [selected]=\"t.status ? true : false\">{{t.status ? 'completed' : 'pending'}}</mat-chip>\r\n            <button mat-icon-button mat-sm-button [matMenuTriggerFor]=\"taskMenu\" class=\"tasktype-action ml-1\">\r\n                <mat-icon class=\"text-muted\">more_vert</mat-icon>\r\n            </button>\r\n            <mat-menu #taskMenu=\"matMenu\">\r\n              <button mat-menu-item>\r\n                <mat-icon>done</mat-icon>\r\n                <span>Completed</span>\r\n              </button>\r\n              <button mat-menu-item>\r\n                <mat-icon>edit</mat-icon>\r\n                <span>Edit</span>\r\n              </button>\r\n              <button mat-menu-item>\r\n                <mat-icon>delete</mat-icon>\r\n                <span>Delete</span>\r\n              </button>\r\n            </mat-menu>\r\n          </div>\r\n        </div>\r\n        <div class=\"text-center\">\r\n          <button mat-button class=\"full-width\">View all</button>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card class=\"default\">\r\n      <mat-card-title>Activity</mat-card-title>\r\n      <mat-card-content class=\"p-0\" fxLayout=\"column\">\r\n        <div class=\"activity-data\">\r\n          <ngx-datatable class=\"material bg-white\"\r\n          [columnMode]=\"'force'\"\r\n          [headerHeight]=\"50\"\r\n          [footerHeight]=\"50\"\r\n          [rowHeight]=\"50\"\r\n          [limit]=\"4\"\r\n          [rows]=\"activityData\">\r\n            <ngx-datatable-column name=\"Month\" [flexGrow]=\"1\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                {{ row?.month }}\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Spent\" [flexGrow]=\"1\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                {{ row?.spent }}\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Opened\" [flexGrow]=\"1\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                {{ row?.opened }}\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Closed\" [flexGrow]=\"1\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                {{ row?.closed }}\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n          </ngx-datatable>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/profile/profile-overview/profile-overview.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/views/profile/profile-overview/profile-overview.component.ts ***!
  \******************************************************************************/
/*! exports provided: ProfileOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileOverviewComponent", function() { return ProfileOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileOverviewComponent = /** @class */ (function () {
    function ProfileOverviewComponent() {
        this.activityData = [{
                month: 'January',
                spent: 240,
                opened: 8,
                closed: 30
            }, {
                month: 'February',
                spent: 140,
                opened: 6,
                closed: 20
            }, {
                month: 'March',
                spent: 220,
                opened: 10,
                closed: 20
            }, {
                month: 'April',
                spent: 440,
                opened: 40,
                closed: 60
            }, {
                month: 'May',
                spent: 340,
                opened: 40,
                closed: 60
            }];
        this.tasks = [{
                text: 'Lorem, ipsum dolor sit amet',
                status: 0
            }, {
                text: 'Lorem, ipsum dolor sit amet',
                status: 0
            }, {
                text: 'Lorem, ipsum dolor sit amet',
                status: 1
            }, {
                text: 'Lorem, ipsum dolor sit amet',
                status: 1
            }, {
                text: 'Lorem, ipsum dolor sit amet',
                status: 1
            }];
        this.tickets = [{
                img: 'assets/images/face-1.jpg',
                name: 'Mike Dake',
                text: 'Excerpt pipe is used.',
                date: new Date('07/12/2017'),
                isOpen: true
            }, {
                img: 'assets/images/face-5.jpg',
                name: 'Jhone Doe',
                text: 'My dashboard is not working.',
                date: new Date('07/7/2017'),
                isOpen: false
            }, {
                img: 'assets/images/face-3.jpg',
                name: 'Jhonson lee',
                text: 'Fix stock issue',
                date: new Date('04/10/2017'),
                isOpen: false
            }, {
                img: 'assets/images/face-4.jpg',
                name: 'Mikie Jyni',
                text: 'Renew my subscription.',
                date: new Date('07/7/2017'),
                isOpen: false
            }, {
                img: 'assets/images/face-5.jpg',
                name: 'Jhone Dake',
                text: 'Payment confirmation.',
                date: new Date('04/10/2017'),
                isOpen: false
            }];
        this.photos = [{
                name: 'Photo 1',
                url: 'assets/images/sq-15.jpg'
            }, {
                name: 'Photo 2',
                url: 'assets/images/sq-8.jpg'
            }, {
                name: 'Photo 3',
                url: 'assets/images/sq-9.jpg'
            }, {
                name: 'Photo 4',
                url: 'assets/images/sq-10.jpg'
            }, {
                name: 'Photo 5',
                url: 'assets/images/sq-11.jpg'
            }, {
                name: 'Photo 6',
                url: 'assets/images/sq-12.jpg'
            }];
    }
    ProfileOverviewComponent.prototype.ngOnInit = function () {
    };
    ProfileOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile-overview',
            template: __webpack_require__(/*! ./profile-overview.component.html */ "./src/app/views/profile/profile-overview/profile-overview.component.html"),
            styles: [__webpack_require__(/*! ./profile-overview.component.css */ "./src/app/views/profile/profile-overview/profile-overview.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileOverviewComponent);
    return ProfileOverviewComponent;
}());



/***/ }),

/***/ "./src/app/views/profile/profile-settings/profile-settings.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/views/profile/profile-settings/profile-settings.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\">\r\n  <mat-tab-group>\r\n\r\n    <mat-tab label=\"Profile Settings\">\r\n      <mat-card-content class=\"mt-3\">\r\n        <form [formGroup]=\"profileSettingsForm\" (ngSubmit)=\"updateProfile()\" class=\"userProfileForm\">\r\n          <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n            <div fxFlex=\"100\" class=\"pr-1\">\r\n              <mat-form-field class=\"full-width\">\r\n                <input matInput name=\"accountName\" [formControl]=\"profileSettingsForm.controls['accountName']\"\r\n                  positiveNumberAndLetterOnly placeholder=\"Name\">\r\n              </mat-form-field>\r\n            </div>\r\n            <div fxFlex=\"100\" class=\"pr-1 mb-3\">\r\n              <mat-form-field class=\"full-width\">\r\n                <input matInput name=\"email\" [formControl]=\"profileSettingsForm.controls['email']\" placeholder=\"Email\">\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n          <button mat-raised-button color=\"primary\" [disabled]=\"profileSettingsForm.invalid\">Save</button>\r\n        </form>\r\n      </mat-card-content>\r\n    </mat-tab>\r\n\r\n    <mat-tab label=\"Security Settings\">\r\n      <mat-card-content class=\"mt-3\">\r\n        <form [formGroup]=\"passwordSettingsForm\" (ngSubmit)=\"changePassword()\" class=\"userProfileForm\">\r\n          <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\" class=\"mt-1\">\r\n            <div fxFlex=\"100\" class=\"pr-1\">\r\n              <mat-form-field class=\"full-width\">\r\n                <input matInput name=\"password\" type=\"password\"\r\n                  [formControl]=\"passwordSettingsForm.controls['currentPassword']\" placeholder=\"Current Password\">\r\n              </mat-form-field>\r\n            </div>\r\n            <div fxFlex=\"100\" class=\"pr-1\">\r\n              <mat-form-field class=\"full-width\">\r\n                <input matInput name=\"password\" type=\"password\"\r\n                  [formControl]=\"passwordSettingsForm.controls['password']\" placeholder=\"Password\"\r\n                  (keyup)=checkConfirmPassword()>\r\n              </mat-form-field>\r\n            </div>\r\n            <div fxFlex=\"100\" class=\"pr-1 mb-3\">\r\n              <mat-form-field class=\"full-width\">\r\n                <input matInput name=\"confirmPassword\" type=\"password\"\r\n                  [formControl]=\"passwordSettingsForm.controls['confirmPassword']\" placeholder=\"Confirm Password\"\r\n                  (keyup)=checkConfirmPassword()>\r\n              </mat-form-field>\r\n              <span class=\"input-bottom-msg\"><span *ngIf=\"passwordStatus !== null\"\r\n                  class=\"{{statusArray[passwordStatus].style}}\">{{statusArray[passwordStatus].value}}</span></span>\r\n            </div>\r\n          </div>\r\n          <button mat-raised-button color=\"primary\"\r\n            [disabled]=\"passwordSettingsForm.invalid || passwordStatus !== null\">Save</button>\r\n\r\n        </form>\r\n      </mat-card-content>\r\n    </mat-tab>\r\n\r\n\r\n    <mat-tab label=\"Profile Picture\">\r\n      <mat-card-content>\r\n        <form class=\"userProfileForm\" style=\"min-height:450px\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-3 mt-4\">\r\n              <img [src]=\"url\" id=\"userProfilePic\">\r\n            </div>\r\n            <div class=\"col-sm-9 mt-2\">\r\n              <mat-card>\r\n                <mat-card-header>\r\n                  <!-- --------- hidden file input --------- -->\r\n                  <input (change)=\"onSelectFile($event)\" #productImgs type=\"file\" style=\"display: none\"\r\n                    base-sixty-four-input>\r\n\r\n                  <!-- --------- file input click button --------- -->\r\n                  <div layout-margin layout-padding class=\"mb-2\">\r\n                    <button mat-raised-button class=\"mr-1\" (click)=\"productImgs.click()\" type=\"button\">\r\n                      Browse Images</button>\r\n                    <!-- <button mat-raised-button class=\"mr-1\" (click)=\"removeSelectedImg()\" type=\"button\" *ngIf=\"url\">\r\n                        Clear Images</button> -->\r\n                    <button mat-raised-button class=\"mr-1\" (click)=\"updateProfilePic()\" type=\"button\" *ngIf=\"url && imageName\">\r\n                      Save</button>\r\n                  </div>\r\n                </mat-card-header>\r\n                <mat-chip *ngIf=\"!imageChangedEvent\" color=\"primary\" disabled>Click \"Browse Image\"\r\n                  and choose\r\n                  image</mat-chip>\r\n                <mat-chip *ngIf=\"imageChangedEvent\" color=\"accent\" disabled>Crop image and click\r\n                  \"Save\" button</mat-chip>\r\n\r\n                <image-cropper [imageChangedEvent]=\"imageChangedEvent\" [maintainAspectRatio]=\"true\" [aspectRatio]=\"1 / 1\"\r\n                  format=\"png/jpeg\" (imageCropped)=\"imageCropped($event)\" (imageLoaded)=\"imageLoaded()\"\r\n                  (loadImageFailed)=\"loadImageFailed()\" style=\"max-height:300px;\"></image-cropper>\r\n                <!-- --------- start images preview container --------- -->\r\n\r\n              </mat-card>\r\n              <!-- --------- end images preview container --------- -->\r\n            </div>\r\n\r\n          </div>\r\n        </form>\r\n      </mat-card-content>\r\n    </mat-tab>\r\n\r\n  </mat-tab-group>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/views/profile/profile-settings/profile-settings.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/views/profile/profile-settings/profile-settings.component.ts ***!
  \******************************************************************************/
/*! exports provided: ProfileSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileSettingsComponent", function() { return ProfileSettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../profile.service */ "./src/app/views/profile/profile.service.ts");
/* harmony import */ var app_model_ClientModel_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/model/ClientModel.model */ "./src/app/model/ClientModel.model.ts");
/* harmony import */ var app_shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/app-loader/app-loader.service */ "./src/app/shared/services/app-loader/app-loader.service.ts");
/* harmony import */ var app_shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/services/app-error/app-error.service */ "./src/app/shared/services/app-error/app-error.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
/* harmony import */ var app_shared_helpers_global_variable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/shared/helpers/global-variable */ "./src/app/shared/helpers/global-variable.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_shared_services_app_profile_interaction_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/shared/services/app-profile/interaction.service */ "./src/app/shared/services/app-profile/interaction.service.ts");
/* harmony import */ var app_views_sessions_authentication_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/views/sessions/authentication.service */ "./src/app/views/sessions/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var ProfileSettingsComponent = /** @class */ (function () {
    function ProfileSettingsComponent(fb, profileService, loader, snack, errDialog, snackBar, r, _interactionService, authService) {
        this.fb = fb;
        this.profileService = profileService;
        this.loader = loader;
        this.snack = snack;
        this.errDialog = errDialog;
        this.snackBar = snackBar;
        this.r = r;
        this._interactionService = _interactionService;
        this.authService = authService;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploader"]({ url: 'upload_url' });
        this.hasBaseDropZoneOver = false;
        this.passwordStatus = null;
        this.globalVariable = new app_shared_helpers_global_variable__WEBPACK_IMPORTED_MODULE_9__["GlobalVariable"]();
        this.statusArray = this.globalVariable.common.message.confirmPasswordStatus;
        this.regex = this.globalVariable.validators.regex;
        this.imageChangedEvent = '';
        this.croppedImage = '';
    }
    ProfileSettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = this.authService.getLoggedUserDetail();
        this.userId = this.currentUser.userData.id;
        this.buildItemForm(this.currentUser.userData);
        // ---------------------------------- UserProfile -------------------------------
        this._interactionService.changeProfilePicture$.subscribe(function (url) {
            _this.url = url;
        });
        // ------------------------------------------------------------------------------
    };
    ProfileSettingsComponent.prototype.buildItemForm = function (data) {
        this.profileSettingsForm = this.fb.group({
            accountName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.accountName || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.email || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
        });
        this.passwordSettingsForm = this.fb.group({
            currentPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.regex._Password)]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.regex._Password)])
        });
    };
    // File uploader validation and upload
    ProfileSettingsComponent.prototype.onSelectFile = function (event) {
        console.log(event);
        this.imageChangedEvent = event;
        // if (event.target.files && event.target.files[0]) {
        //   let file = event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0];
        //   let pattern = /image-*/;
        //   let reader = new FileReader();
        //   if (!file.type.match(pattern)) {
        //     this.snackBar.open(
        //       "Invalid Format!",
        //       "close",
        //       { duration: 2000 }
        //     );
        //     return;
        //   }
        //   reader.onload = (event: any) => {
        //     this.url = event.target.result;
        //     this.imageName = file.name;
        //   };
        //   reader.readAsDataURL(file);
        // } else {
        //   this.snackBar.open(
        //     "Can't upload",
        //     "close",
        //     { duration: 2000 }
        //   );
        // }
    };
    ProfileSettingsComponent.prototype.imageCropped = function (image) {
        var _this = this;
        console.log(image);
        console.log(this.imageChangedEvent);
        this.url = "";
        this.url = image.base64;
        if (this.imageChangedEvent.target.files && this.imageChangedEvent.target.files[0]) {
            var file_1 = this.imageChangedEvent.dataTransfer ? this.imageChangedEvent.dataTransfer.files[0] : this.imageChangedEvent.target.files[0];
            var pattern = /image-*/;
            var reader = new FileReader();
            if (!file_1.type.match(pattern)) {
                this.snackBar.open("Invalid Format!", "close", { duration: 2000 });
                return;
            }
            reader.onload = function (event) {
                // this.url = event.target.result;
                _this.url;
                _this.imageName = file_1.name;
            };
            reader.readAsDataURL(file_1);
        }
        else {
            this.snackBar.open("Can't upload", "close", { duration: 2000 });
        }
    };
    ProfileSettingsComponent.prototype.imageLoaded = function () {
        // show cropper
    };
    ProfileSettingsComponent.prototype.loadImageFailed = function () {
        // show message
    };
    ProfileSettingsComponent.prototype.removeSelectedImg = function () {
        this.url = null;
    };
    ProfileSettingsComponent.prototype.updateProfile = function () {
        var _this = this;
        var itemForm = this.profileSettingsForm.value;
        var req = new app_model_ClientModel_model__WEBPACK_IMPORTED_MODULE_4__["profileUpdateReq"](this.userId, itemForm.accountName, itemForm.email);
        this.profileService.updateUser(req).subscribe(function (response) {
            _this.loader.close();
            _this.snack.open("Profile Updated!", "OK", { duration: 4000 });
            _this.currentUser.userData.accountName = _this.currentUser.accountName = response.content.accountName;
            _this.currentUser.userData.email = response.content.email;
            _this.authService.setLoggedUserDetail(_this.currentUser);
            // localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
            _this.changeProfileDetails(response.content.accountName);
        }, function (error) {
            _this.loader.close();
            _this.errDialog.showError(error);
        });
    };
    ProfileSettingsComponent.prototype.changeProfileDetails = function (userName) {
        this._interactionService.changeProfileDetails(userName);
    };
    ProfileSettingsComponent.prototype.checkConfirmPassword = function () {
        var itemForm = this.passwordSettingsForm.value;
        console.log('-------------------- ', itemForm.password === null ? "Null" : itemForm.password === '' ? "Empty" : itemForm.password);
        console.log('-------------------- ', itemForm.confirmPassword === null ? "Null" : itemForm.confirmPassword === '' ? "Empty" : itemForm.confirmPassword);
        if (itemForm.password !== '') {
            // --
            var result = itemForm.password.match(this.regex._Password);
            if (result && result.length > 0) {
                this.passwordStatus = null;
            }
            else {
                this.passwordStatus = 1; // Regex not match with password
            }
            // --
        }
        if (itemForm.confirmPassword !== '') {
            if (this.passwordStatus === null) {
                // --
                var result = itemForm.password.match(this.regex._Password);
                if (result && result.length > 0) {
                    this.passwordStatus = null;
                }
                else {
                    this.passwordStatus = 1; // Regex not match with confirmPassword
                }
                // --
            }
        }
        if (itemForm.password === '' && itemForm.confirmPassword === '') {
            this.passwordStatus = null;
        }
        if (itemForm.password !== '' && itemForm.confirmPassword !== '' && this.passwordStatus === null && itemForm.password !== itemForm.confirmPassword) {
            this.passwordStatus = 2;
        }
    };
    ProfileSettingsComponent.prototype.changePassword = function () {
        var _this = this;
        var itemForm = this.passwordSettingsForm.value;
        var req = new app_model_ClientModel_model__WEBPACK_IMPORTED_MODULE_4__["passwordUpdateReq"](this.userId, itemForm.currentPassword, itemForm.confirmPassword);
        this.profileService.updateUserPassword(req).subscribe(function (response) {
            _this.passwordSettingsForm.reset();
            _this.checkConfirmPassword();
            _this.snack.open("Password Updated!", "OK", { duration: 4000 });
        }, function (error) {
            console.log("------error", error.error);
            _this.errDialog.showError(error);
        });
    };
    ProfileSettingsComponent.prototype.updateProfilePic = function () {
        var _this = this;
        this.loader.open();
        var req = new app_model_ClientModel_model__WEBPACK_IMPORTED_MODULE_4__["userImageReq"](this.userId, this.url, this.imageName);
        this.profileService.updateProfilePic(req).subscribe(function (response) {
            _this.loader.close();
            _this.imageChangedEvent = "";
            _this.snack.open("Profile Picture Updated!", "OK", { duration: 4000 });
            _this._interactionService.changeProfilePicture(_this.userId);
            _this.imageName = null;
        }, function (error) {
            _this.loader.close();
            _this.errDialog.showError(error);
        });
    };
    ProfileSettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile-settings',
            template: __webpack_require__(/*! ./profile-settings.component.html */ "./src/app/views/profile/profile-settings/profile-settings.component.html"),
            animations: app_shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_8__["egretAnimations"],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"],
            app_shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_5__["AppLoaderService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"],
            app_shared_services_app_error_app_error_service__WEBPACK_IMPORTED_MODULE_6__["AppErrorService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
            app_shared_services_app_profile_interaction_service__WEBPACK_IMPORTED_MODULE_11__["InteractionService"],
            app_views_sessions_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"]])
    ], ProfileSettingsComponent);
    return ProfileSettingsComponent;
}());



/***/ }),

/***/ "./src/app/views/profile/profile.component.html":
/*!******************************************************!*\
  !*** ./src/app/views/profile/profile.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\r\n  <div fxFlex=\"100\" fxFlex.gt-md=\"300px\" fxFlex.gt-sm=\"50\">\r\n    <mat-card class=\"profile-sidebar mb-1 pb-0\">\r\n      <div class=\"propic text-center\">\r\n        <img src=\"{{this.profileImg}}\" alt=\"\" />\r\n      </div>\r\n      <div class=\"profile-title text-center mb-1\">\r\n        <div class=\"main-title\">{{this.userDisplayName}}</div>\r\n        <div class=\"subtitle mb-05\">{{ currentUser.company }}</div>\r\n        <div class=\"text-muted\">\r\n          Welcome on Truverus! Hope you're doing good today\r\n        </div>\r\n      </div>\r\n      <!-- <div class=\"profile-actions text-center mb-1\">\r\n        <button color=\"primary\" mat-raised-button=\"\" class=\"mat-raised-button mat-primary mr-1\">\r\n          <span class=\"mat-button-wrapper\">Message</span>\r\n          <div class=\"mat-button-ripple mat-ripple\" matripple=\"\"></div>\r\n          <div class=\"mat-button-focus-overlay\"></div>\r\n        </button><button color=\"accent\" mat-raised-button=\"\" class=\"mat-raised-button mat-accent\">\r\n          <span class=\"mat-button-wrapper\">Follow</span>\r\n          <div class=\"mat-button-ripple mat-ripple\" matripple=\"\"></div>\r\n          <div class=\"mat-button-focus-overlay\"></div>\r\n        </button>\r\n      </div> -->\r\n      <div class=\"profile-nav\">\r\n        <mat-nav-list>\r\n          <!--\r\n            <mat-list-item routerLink=\"/profile/overview\" routerLinkActive=\"list-item-active\">\r\n              <mat-icon>home</mat-icon>\r\n              Overview\r\n            </mat-list-item>\r\n            <mat-divider></mat-divider>\r\n          -->\r\n          <mat-list-item routerLink=\"/profile/profile-settings\" routerLinkActive=\"list-item-active\">\r\n            <mat-icon>portrait</mat-icon>\r\n            Profile Settings\r\n          </mat-list-item>\r\n          <mat-divider></mat-divider>\r\n          <mat-list-item routerLink=\"/profile/account-settings\" routerLinkActive=\"list-item-active\" [roleAuthorization]=\"'isPredefined'\">\r\n            <mat-icon>work</mat-icon>\r\n            Account Settings\r\n          </mat-list-item>\r\n          <mat-divider></mat-divider>\r\n\r\n          <mat-list-item routerLink=\"/profile/general-settings\" routerLinkActive=\"list-item-active\" [roleAuthorization]=\"'isPredefined'\">\r\n            <mat-icon>settings</mat-icon>\r\n            General Settings\r\n          </mat-list-item>\r\n          <!-- <mat-list-item routerLink=\"/profile/blank\" routerLinkActive=\"list-item-active\">\r\n            <mat-icon>content_paste</mat-icon>\r\n            Blank\r\n          </mat-list-item> -->\r\n\r\n        </mat-nav-list>\r\n      </div>\r\n    </mat-card>\r\n  </div>\r\n\r\n  <!-- Profile Views -->\r\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" fxFlex.gt-md=\"calc(100% - 300px)\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/views/profile/profile.component.ts":
/*!****************************************************!*\
  !*** ./src/app/views/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_helpers_local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/helpers/local-storage */ "./src/app/shared/helpers/local-storage.ts");
/* harmony import */ var _sessions_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sessions/authentication.service */ "./src/app/views/sessions/authentication.service.ts");
/* harmony import */ var app_shared_services_app_profile_interaction_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/app-profile/interaction.service */ "./src/app/shared/services/app-profile/interaction.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = /** @class */ (function (_super) {
    __extends(ProfileComponent, _super);
    function ProfileComponent(router, authService, _interactionService) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.authService = authService;
        _this._interactionService = _interactionService;
        _this.activeView = "overview";
        return _this;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeView = this.router.snapshot.params["view"];
        // ---------------------------------- UserProfile -------------------------------
        this.currentUser = this.authService.getLoggedUserDetail();
        console.log(JSON.stringify(this.currentUser));
        this.userDisplayName = this.currentUser.userData.accountName;
        this._interactionService.changeProfileDetails$.subscribe(function (userName) {
            _this.userDisplayName = userName;
        });
        this._interactionService.changeProfilePicture$.subscribe(function (url) {
            _this.profileImg = url;
        });
        // ------------------------------------------------------------------------------
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-profile",
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/views/profile/profile.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _sessions_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            app_shared_services_app_profile_interaction_service__WEBPACK_IMPORTED_MODULE_4__["InteractionService"]])
    ], ProfileComponent);
    return ProfileComponent;
}(_shared_helpers_local_storage__WEBPACK_IMPORTED_MODULE_2__["LocalStorageHandler"]));



/***/ }),

/***/ "./src/app/views/profile/profile.module.ts":
/*!*************************************************!*\
  !*** ./src/app/views/profile/profile.module.ts ***!
  \*************************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-charts/ng2-charts */ "./node_modules/ng2-charts/ng2-charts.js");
/* harmony import */ var ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-file-upload/ng2-file-upload */ "./node_modules/ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile.component */ "./src/app/views/profile/profile.component.ts");
/* harmony import */ var _profile_overview_profile_overview_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./profile-overview/profile-overview.component */ "./src/app/views/profile/profile-overview/profile-overview.component.ts");
/* harmony import */ var _profile_settings_profile_settings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./profile-settings/profile-settings.component */ "./src/app/views/profile/profile-settings/profile-settings.component.ts");
/* harmony import */ var _account_settings_account_settings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./account-settings/account-settings.component */ "./src/app/views/profile/account-settings/account-settings.component.ts");
/* harmony import */ var _profile_license_profile_license_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./profile-license/profile-license.component */ "./src/app/views/profile/profile-license/profile-license.component.ts");
/* harmony import */ var _profile_blank_profile_blank_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./profile-blank/profile-blank.component */ "./src/app/views/profile/profile-blank/profile-blank.component.ts");
/* harmony import */ var _profile_routing__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./profile.routing */ "./src/app/views/profile/profile.routing.ts");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./profile.service */ "./src/app/views/profile/profile.service.ts");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/fesm5/ngx-image-cropper.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"],
                ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"],
                ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__["FileUploadModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
                ngx_image_cropper__WEBPACK_IMPORTED_MODULE_18__["ImageCropperModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_profile_routing__WEBPACK_IMPORTED_MODULE_16__["ProfileRoutes"])
            ],
            providers: [_profile_service__WEBPACK_IMPORTED_MODULE_17__["ProfileService"]],
            declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"], _profile_overview_profile_overview_component__WEBPACK_IMPORTED_MODULE_11__["ProfileOverviewComponent"], _profile_settings_profile_settings_component__WEBPACK_IMPORTED_MODULE_12__["ProfileSettingsComponent"], _account_settings_account_settings_component__WEBPACK_IMPORTED_MODULE_13__["AccountSettingsComponent"], _profile_license_profile_license_component__WEBPACK_IMPORTED_MODULE_14__["ProfileLicenseComponent"], _profile_blank_profile_blank_component__WEBPACK_IMPORTED_MODULE_15__["ProfileBlankComponent"]]
        })
    ], ProfileModule);
    return ProfileModule;
}());



/***/ }),

/***/ "./src/app/views/profile/profile.routing.ts":
/*!**************************************************!*\
  !*** ./src/app/views/profile/profile.routing.ts ***!
  \**************************************************/
/*! exports provided: ProfileRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileRoutes", function() { return ProfileRoutes; });
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.component */ "./src/app/views/profile/profile.component.ts");
/* harmony import */ var _profile_overview_profile_overview_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-overview/profile-overview.component */ "./src/app/views/profile/profile-overview/profile-overview.component.ts");
/* harmony import */ var _profile_settings_profile_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-settings/profile-settings.component */ "./src/app/views/profile/profile-settings/profile-settings.component.ts");
/* harmony import */ var _account_settings_account_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account-settings/account-settings.component */ "./src/app/views/profile/account-settings/account-settings.component.ts");
/* harmony import */ var _profile_blank_profile_blank_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile-blank/profile-blank.component */ "./src/app/views/profile/profile-blank/profile-blank.component.ts");
/* harmony import */ var _profile_license_profile_license_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-license/profile-license.component */ "./src/app/views/profile/profile-license/profile-license.component.ts");






var ProfileRoutes = [
    {
        path: '',
        component: _profile_component__WEBPACK_IMPORTED_MODULE_0__["ProfileComponent"],
        children: [{
                path: 'overview',
                component: _profile_overview_profile_overview_component__WEBPACK_IMPORTED_MODULE_1__["ProfileOverviewComponent"],
                data: { title: 'Overview', breadcrumb: 'OVERVIEW' }
            },
            {
                path: 'profile-settings',
                component: _profile_settings_profile_settings_component__WEBPACK_IMPORTED_MODULE_2__["ProfileSettingsComponent"],
                data: { title: 'Profile Settings', breadcrumb: 'PROFILE SETTINGS' }
            },
            {
                path: 'account-settings',
                component: _account_settings_account_settings_component__WEBPACK_IMPORTED_MODULE_3__["AccountSettingsComponent"],
                data: { title: 'Account Settings', breadcrumb: 'ACCOUNT SETTINGS' }
            },
            {
                path: 'general-settings',
                component: _profile_license_profile_license_component__WEBPACK_IMPORTED_MODULE_5__["ProfileLicenseComponent"],
                data: { title: 'General Settings', breadcrumb: 'GENERAL SETTINGS' }
            },
            {
                path: 'blank',
                component: _profile_blank_profile_blank_component__WEBPACK_IMPORTED_MODULE_4__["ProfileBlankComponent"],
                data: { title: 'Blank', breadcrumb: 'BLANK' }
            }]
    }
];


/***/ }),

/***/ "./src/app/views/profile/profile.service.ts":
/*!**************************************************!*\
  !*** ./src/app/views/profile/profile.service.ts ***!
  \**************************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! environments/environment.prod */ "./src/environments/environment.prod.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileService = /** @class */ (function () {
    function ProfileService(http) {
        this.http = http;
        this.userUrl = environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].userApiUrl + "platform-users";
        this.userProfileUrl = environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].userApiUrl + "platform-user-profiles";
        this.clientUrl = environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].userApiUrl + "clients";
        this.licenseUrl = this.clientUrl + "/license";
        this.specsUrl = environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].userApiUrl + "spec";
        this.geoUrl = environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].userApiUrl + "geo";
        this.imgBaseURL = environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].userApiUrl + 'downloads';
    }
    ProfileService.prototype.updateUser = function (item) {
        return this.http
            .put(this.userProfileUrl, item)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        // return this.http
        //   .put<any>(this.userProfileUrl +"/"+ id, item)
        //   .pipe(catchError(this.handleError));
    };
    ProfileService.prototype.updateUserPassword = function (item) {
        return this.http
            .put(this.userProfileUrl + "/change-password", item)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ProfileService.prototype.updateProfilePic = function (item) {
        return this.http
            .post(this.userUrl + "/profileImage", item)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ProfileService.prototype.getClient = function (id) {
        return this.http.get(this.clientUrl + "/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ProfileService.prototype.getCategory = function () {
        return this.http.get(this.specsUrl + "/categories").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ProfileService.prototype.getCountry = function () {
        return this.http.get(this.geoUrl + "/countries").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ProfileService.prototype.getClientCategories = function (id) {
        return this.http.get(this.clientUrl + "/categories/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ProfileService.prototype.updateClientLicense = function (id, item) {
        return this.http
            .put(this.licenseUrl + "/" + id, item)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ProfileService.prototype.updateClientCategory = function (id, item) {
        return this.http
            .put(this.clientUrl + "/categories/" + id, item)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ProfileService.prototype.updateClientDetails = function (id, item) {
        return this.http
            .put(this.clientUrl + "/" + id, item)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ProfileService.prototype.handleError = function (error) {
        console.log(error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
    };
    ProfileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ProfileService);
    return ProfileService;
}());



/***/ })

}]);
//# sourceMappingURL=views-profile-profile-module.js.map