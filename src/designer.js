

import "./css/2020.1.1/stimulsoft.designer.office2013.whiteblue.css";
import "./css/2020.1.1/stimulsoft.viewer.office2013.whiteblue.css";

import {Stimulsoft} from "./scripts/2020.1.1/stimulsoft.reports.js";
// import "./scripts/2020.1.1/stimulsoft.designer.js";
// import "./scripts/2020.1.1/stimulsoft.blockly.editor.js";

import {
  useComponentDidMount,
} from "./lifecycle";

import React from 'react';

const Stimulsoft = window.Stimulsoft || {};
let data = null;

export const DesingerComponent = ({ myProp }) => {
  useComponentDidMount(() => {

    var options = new window.Stimulsoft.Designer.StiDesignerOptions();
    options.appearance.fullScreenMode = false;

    var designer = new window.Stimulsoft.Designer.StiDesigner(options, 'StiDesigner', false);
    var report = new window.Stimulsoft.Report.StiReport();
    report.loadFile("/reports/crossTabTest2.mrt");
    designer.report = report;

    var dsDataSource = new Stimulsoft.System.Data.DataSet();
    dsDataSource.readJson(data);
    report.regData("DataSource", null, dsDataSource);
    designer.report = report;

    designer.renderHtml("content");
  });

  return <div id="content">
  </div>;
};


