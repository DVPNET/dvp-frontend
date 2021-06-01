
$(document).ready(function(){


var url = '/static/Decentralized_Vulnerability_Platform_cn.pdf?v=1';
    //  workerSrc的路径
    PDFJS.workerSrc = '/static/pdf/pdf.worker.js';
 
    var pdfDoc = null,
        pageNum = 1,
        pageRendering = false,
        pageNumPending = null,
        scale = .85,////设置pdf文本显示区域的缩放级别
        canvas = document.getElementById('the-canvas'),
        ctx = canvas.getContext('2d');
 
    /**
     * 渲染对应的文档页码，并且调整canvas大小，渲染界面
     * @param num 页码.
     */
    function renderPage(num) {
        pageRendering = true;
        // 通过promise来获取
        pdfDoc.getPage(num).then(function (page) {
 
            var viewport = page.getViewport(scale);
            canvas.height = viewport.height;
            canvas.width = 1070;
 
            //将PDF文件渲染进canvas中
            var renderContext = {
                canvasContext: ctx,
                viewport: viewport
            };
            var renderTask = page.render(renderContext);
 
            //等待渲染结束
            renderTask.promise.then(function () {
                $('.loading-tips').hide();
                pageRendering = false;
                if (pageNumPending !== null) {
                    // New page rendering is pending
                    renderPage(pageNumPending);
                    pageNumPending = null;
                }
            });
        });
 
        // 更新页码
        document.getElementById('page_num').textContent = num;
    }
 
    /**
     * 如果有另一个页面pdf页正在渲染，那么先等这个pdf页渲染完再渲染。否则立即渲染传进来的页码。
     */
    function queueRenderPage(num) {
        if (pageRendering) {
            pageNumPending = num;
        } else {
            renderPage(num);
        }
    }
 
    /**
     * 上一页
     */
    function onPrevPage() {
        if (pageNum <= 1) {
            return;
        }
        pageNum--;
        queueRenderPage(pageNum);
    }
 
    /**
     * 下一页
     */
    function onNextPage() {
        if (pageNum >= pdfDoc.numPages) {
            return;
        }
        pageNum++;
        queueRenderPage(pageNum);
    }
 
    /**
     * 异步的下载pdf文件
     */
    PDFJS.getDocument(url).then(function (pdfDoc_) {
        pdfDoc = pdfDoc_;
        document.getElementById('page_count').textContent = pdfDoc.numPages;
    
        // 下载完以后初始化渲染第一页
        renderPage(pageNum);
    });
 
    function _touch() {
        var startx;//让startx在touch事件函数里是全局性变量。
        var endx;
        var el = document.getElementsByTagName("body")[0];
 
        function cons() {   //独立封装这个事件可以保证执行顺序，从而能够访问得到应该访问的数据。
            var l = Math.abs(startx - endx);
            var h = Math.abs(starty - endy);
 
            if (l > h) {
                // x事件
                if (startx > endx) {
                    onNextPage();
                } else if (startx < endx) {
                    onPrevPage();
                }
 
            } else {
                // y事件
                if (starty > endy) {
                    onNextPage();
                } else if (starty < endy) {
                    onPrevPage();
                }
            }
 
        }
 
        el.addEventListener('touchstart', function (e) {
            var touch = e.changedTouches;
            startx = touch[0].clientX;
            starty = touch[0].clientY;
        });
        el.addEventListener('touchend', function (e) {
            var touch = e.changedTouches;
            endx = touch[0].clientX;
            endy = touch[0].clientY;
            cons();  //startx endx 的数据收集应该放在touchend事件后执行，而不是放在touchstart事件里执行，这样才能访问到touchstart和touchend这2个事件产生的startx和endx数据。另外startx和endx在_touch事件函数里是全局性的，所以在此函数中都可以访问得到，所以只需要注意事件执行的先后顺序即可。
        });
    }
 
    _touch();

    function click() {
        $('.prev-btn').on('click', function () {
            onPrevPage();
        });
        $('.next-btn').on('click', function () {
            onNextPage();
        });
    }
  
    click();
    
});

