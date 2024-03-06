import React, { memo, useEffect, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const container = useRef();

  const newRef = useRef(0);

  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src =
  //     "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
  //   script.type = "text/javascript";
  //   script.async = true;
  //   script.innerHTML = `
  //   {
  //     "symbols": [
  //       [
  //         "COINBASE:BTCUSD|1M"
  //       ]
  //     ],
  //     "chartOnly": true,
  //     "width": "360",
  //     "height": "300",
  //     "locale": "en",
  //     "colorTheme": "dark",
  //     "autosize": true,
  //     "showVolume": false,
  //     "showMA": false,
  //     "hideDateRanges": false,
  //     "hideMarketStatus": false,
  //     "hideSymbolLogo": false,
  //     "scalePosition": "right",
  //     "scaleMode": "Normal",
  //     "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
  //     "fontSize": "10",
  //     "noTimeScale": false,
  //     "valuesTracking": "1",
  //     "changeMode": "price-and-percent",
  //     "chartType": "area",
  //     "maLineColor": "#2962FF",
  //     "maLineWidth": 1,
  //     "maLength": 9,
  //     "lineWidth": 2,
  //     "lineType": 0,
  //     "dateRanges": [
  //       "1d|1",
  //       "1m|30",
  //       "3m|60",
  //       "12m|1D",
  //       "60m|1W",
  //       "all|1M"
  //     ]
  //   }`;
  //   if (newRef.current === 0) {
  //     container.current.appendChild(script);
  //     newRef.current += 1;
  //   }
  // }, []);

  // return (
  //   <div className="tradingview-widget-container" ref={container} style={{}}>
  //     <div className="tradingview-widget-container__widget"></div>
  //     <div className="tradingview-widget-copyright">
  //       <a
  //         href="https://www.tradingview.com/"
  //         rel="noopener nofollow"
  //         target="_blank"
  //       ></a>
  //     </div>
  //   </div>
  // );

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
           "height":"400",
           "symbol": "BINANCE:BTCUSDT",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "enable_publishing": false,
          "allow_symbol_change": true,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;
    if (newRef.current === 0) {
      container.current.appendChild(script);
      newRef.current += 1;
    }
  }, []);

  return (
    <div
      className="tradingview-widget-container"
      ref={container}
      style={{ height: "800px", width: "100%", backgroundColor: "black" }}
    >
      <div
        className="tradingview-widget-container__widget"
        style={{ height: "calc(100% - 32px)", width: "100%" }}
      ></div>
      <div className="tradingview-widget-copyright"></div>
    </div>
  );
}

export default memo(App);
