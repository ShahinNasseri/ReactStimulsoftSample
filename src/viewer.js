import {
  useComponentDidMount,
} from "./lifecycle";

import React from 'react';

const Stimulsoft = window.Stimulsoft || {};
let data = null;

export const ViewerComponent = ({ myProp }) => {
  useComponentDidMount(() => {
    var viewer = new window.Stimulsoft.Viewer.StiViewer(null, 'content', false);
    var report = new window.Stimulsoft.Report.StiReport();
    report.loadFile("/reports/crossTabTest2.mrt");
    viewer.report = report;

    var dsDataSource = new Stimulsoft.System.Data.DataSet();
    dsDataSource.readJson(data);
    report.regData("DataSource", null, dsDataSource);
    viewer.report = report;

    viewer.renderHtml("content");
  });

  return <div id="content">
  </div>;
};


