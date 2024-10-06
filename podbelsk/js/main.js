!(function($){

	RegExp.escape = function(string) {
		return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
	};

	/**
	 * Default options Fancybox
	**/
	$.fancybox.defaults.i18n.ru = {
		CLOSE: "Закрыть",
		NEXT: "Следующий",
		PREV: "Предыдущий",
		ERROR: "Запрошенный контент не может быть загружен.<br/>Повторите попытку позже.",
		PLAY_START: "Начать слайдшоу",
		PLAY_STOP: "Остановить слайдшоу",
		FULL_SCREEN: "Полный экран",
		THUMBS: "Миниатюры",
		DOWNLOAD: "Скачать",
		SHARE: "Поделиться",
		ZOOM: "Увеличить"
	};
	$.fancybox.defaults.transitionEffect = "circular";
	$.fancybox.defaults.transitionDuration = 500;
	$.fancybox.defaults.lang = "ru";
/*
	$(document, 'a').on('click', (e) => {
		const reg = new RegExp("^" + RegExp.escape(window.location.origin +"/") + '.+\\.(pdf|xlsx)$', 'i');
		let a = e.target,
			href = a.href,
			m;
		if((m = reg.exec(href)) !== null){
			e.preventDefault();
			let cs = m[1].toLowerCase(),
				options = {}.
				go = "";
			switch(cs) {
				case "pdf":
					go = window.location.origin + '/viewer/pdf_viewer/?file=' + href;
					options = {
						src: go,
						toolbar: true,
						smallBtn: false,
						buttons: [
							"close"
						],
						opts : {
							afterShow : function( instance, current ) {

							},
							afterLoad : function( instance, current ) {

							},
						}
					};
					$.fancybox.open(options);
					break;
				case "xlsx":
					go = window.location.origin + '/viewer/xlsx_viewer/?file=' + href;
					options = {
						src: go,
						toolbar: true,
						smallBtn: false,
						buttons: [
							"close"
						],
						opts : {
							afterShow : function( instance, current ) {

							},
							afterLoad : function( instance, current ) {

							},
						}
					};
					$.fancybox.open(options);
					break;
			}
			return !1;
		}
	});
	$(document,'figure.wp-block-image > a ').on('click', (e) => {
		let target = e.target.nodeName == "A" ? $(e.target) : $(e.target).closest('a');
		if (target[0] && !target[0].hasAttribute("data-fancybox")) {
			e.preventDefault();
			let href = target[0].href;
			let options = {
				src: href,
				toolbar: true,
				smallBtn: false,
				buttons: [
					"close"
				],
				opts : {
					afterShow : function( instance, current ) {
					},
					afterLoad : function( instance, current ) {
					},
				}
			};
			$.fancybox.open(options);
			return !1;
		}
	});
*/
}(jQuery));