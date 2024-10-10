!(function($){
	RegExp.escape = function(string) {
		return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
	};
	/**
	 * Дефолтные настройки Fancybox
	 * Добавляем Русский язык
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
	/**
	 * Клик на ссылках документов
	 * pdf, xlsx
	 */
	$(document).on('click', "a[href$='.pdf'], a[href$='.xlsx']", e => {
		let target = e.target.nodeName == "A" ? $(e.target) : $(e.target).closest('a'),
			base = window.location.origin + '/',
			reg = new RegExp("^" + base),
			href, test, arr, ext, options;
		/**
		 * Если существует
		 */
		if (target[0]) {
			href = target[0].href;
			/**
			 * Если проходит регулярку
			 */
			if(reg.test(href)){
				arr = href.split('.');
				ext = arr.at(-1).toLowerCase();
				test = href.replace(base, "/");
				switch (ext){
					case "pdf":
						options = {
							src: window.location.origin + '/viewer/pdf_viewer/?file=' + test,
							toolbar: true,
							smallBtn: false,
							buttons: [
								"close"
							],
							opts : {
								afterShow : function( instance, current ) {
									/** Если нужно какое-то действие */
								},
								afterLoad : function( instance, current ) {
									/** Если нужно какое-то действие */
								},
							}
						};
						console.log(options.src);
						/**
						 * Открываем fancybox
						 */
						e.preventDefault();
						$.fancybox.open(options);
						return !1;
						break;
					// Здесь РАЗОБРАТЬСЯ. Не правильно вставляется ссылка в iframe
					case "xlsx":
						
					/**
						options = {
							src: window.location.origin + '/viewer/xlsx_viewer/?file=' + test,
							toolbar: true,
							smallBtn: false,
							buttons: [
								"close"
							],
							opts : {
								afterShow : function( instance, current ) {},
								afterLoad : function( instance, current ) {},
							}
						};
						console.log(options.src);
						// Открываем fancybox
						e.preventDefault();
						$.fancybox.open(options);
						return !1;
					*/
						break;
				}
			}
		}
	})
	/**
	 * Клик на ссылке изображения в контенте
	 */
	.on('click', ".entry-content a[href$='.jpg'], .entry-content a[href$='.jpeg'], .entry-content a[href$='.png'], .entry-content a[href$='.gif'], .entry-content a[href$='.webp']", e => {
		let target = e.target.nodeName == "A" ? $(e.target) : $(e.target).closest('a');
		/**
		 * Если существует
		 * и нет атрибута data-fancybox
		 */
		if (target[0] && (typeof target.data("fancybox") !== "string")) {
			let base = window.location.origin,
				reg = new RegExp("^" + base),
				href = target[0].href;
			/**
			 * Если проходит регулярку
			 */
			if(reg.test(href)){
				/**
				 * Открываем fancybox
				 */
				e.preventDefault();
				$.fancybox.open({
					src: href
				});
				return !1;
			}
		}
	});
}(jQuery));