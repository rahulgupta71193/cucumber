$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("tester.feature");
formatter.feature({
  "line": 1,
  "name": "About Testers",
  "description": "\r\nIn order to get a high paid job\r\nAs a Tester\r\nI want to learn Automation",
  "id": "about-testers",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "I am a Manual Tester",
  "description": "",
  "id": "about-testers;i-am-a-manual-tester",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I am a \"\u003ctesterType\u003e\" Tester",
  "rows": [
    {
      "cells": [
        "Location",
        "Position"
      ],
      "line": 9
    },
    {
      "cells": [
        "USA",
        "Contract"
      ],
      "line": 10
    },
    {
      "cells": [
        "India",
        "Permanent"
      ],
      "line": 11
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I apply for a job",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I got a \"\u003cjobType\u003e\" paid job",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I am \"\u003csatisfactionType\u003e\" satisfied with my salary",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "My parents are \"\u003cparentsSatisfaction\u003e\" satisfied",
  "keyword": "But "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "about-testers;i-am-a-manual-tester;",
  "rows": [
    {
      "cells": [
        "testerType",
        "jobType",
        "satisfactionType",
        "parentsSatisfaction"
      ],
      "line": 18,
      "id": "about-testers;i-am-a-manual-tester;;1"
    },
    {
      "cells": [
        "Manual",
        "Less",
        "Low",
        "Average"
      ],
      "line": 19,
      "id": "about-testers;i-am-a-manual-tester;;2"
    },
    {
      "cells": [
        "Automation",
        "High",
        "Very",
        "Highly"
      ],
      "line": 20,
      "id": "about-testers;i-am-a-manual-tester;;3"
    },
    {
      "cells": [
        "Database",
        "Good",
        "Better",
        "Better"
      ],
      "line": 21,
      "id": "about-testers;i-am-a-manual-tester;;4"
    },
    {
      "cells": [
        "Databse",
        "Good",
        "Better",
        "Better"
      ],
      "line": 22,
      "id": "about-testers;i-am-a-manual-tester;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "I am a Manual Tester",
  "description": "",
  "id": "about-testers;i-am-a-manual-tester;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I am a \"Manual\" Tester",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "Location",
        "Position"
      ],
      "line": 9
    },
    {
      "cells": [
        "USA",
        "Contract"
      ],
      "line": 10
    },
    {
      "cells": [
        "India",
        "Permanent"
      ],
      "line": 11
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I apply for a job",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I got a \"Less\" paid job",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I am \"Low\" satisfied with my salary",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "My parents are \"Average\" satisfied",
  "matchedColumns": [
    3
  ],
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "Manual",
      "offset": 8
    }
  ],
  "location": "Tester.I_am_a_Manual_Tester(String,DataTable)"
});
formatter.result({
  "duration": 226506500,
  "status": "passed"
});
formatter.match({
  "location": "Tester.I_apply_for_a_job()"
});
formatter.result({
  "duration": 382100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Less",
      "offset": 9
    }
  ],
  "location": "Tester.I_got_a_less_paid_job(String)"
});
formatter.result({
  "duration": 353900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Low",
      "offset": 6
    }
  ],
  "location": "Tester.I_am_not_satisfied_with_my_salary(String)"
});
formatter.result({
  "duration": 161800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Average",
      "offset": 16
    }
  ],
  "location": "Tester.My_parents_are_still_satisfied(String)"
});
formatter.result({
  "duration": 532100,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "I am a Manual Tester",
  "description": "",
  "id": "about-testers;i-am-a-manual-tester;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I am a \"Automation\" Tester",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "Location",
        "Position"
      ],
      "line": 9
    },
    {
      "cells": [
        "USA",
        "Contract"
      ],
      "line": 10
    },
    {
      "cells": [
        "India",
        "Permanent"
      ],
      "line": 11
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I apply for a job",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I got a \"High\" paid job",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I am \"Very\" satisfied with my salary",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "My parents are \"Highly\" satisfied",
  "matchedColumns": [
    3
  ],
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "Automation",
      "offset": 8
    }
  ],
  "location": "Tester.I_am_a_Manual_Tester(String,DataTable)"
});
formatter.result({
  "duration": 957000,
  "status": "passed"
});
formatter.match({
  "location": "Tester.I_apply_for_a_job()"
});
formatter.result({
  "duration": 774400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "High",
      "offset": 9
    }
  ],
  "location": "Tester.I_got_a_less_paid_job(String)"
});
formatter.result({
  "duration": 2675700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Very",
      "offset": 6
    }
  ],
  "location": "Tester.I_am_not_satisfied_with_my_salary(String)"
});
formatter.result({
  "duration": 157400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Highly",
      "offset": 16
    }
  ],
  "location": "Tester.My_parents_are_still_satisfied(String)"
});
formatter.result({
  "duration": 342300,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "I am a Manual Tester",
  "description": "",
  "id": "about-testers;i-am-a-manual-tester;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I am a \"Database\" Tester",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "Location",
        "Position"
      ],
      "line": 9
    },
    {
      "cells": [
        "USA",
        "Contract"
      ],
      "line": 10
    },
    {
      "cells": [
        "India",
        "Permanent"
      ],
      "line": 11
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I apply for a job",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I got a \"Good\" paid job",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I am \"Better\" satisfied with my salary",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "My parents are \"Better\" satisfied",
  "matchedColumns": [
    3
  ],
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "Database",
      "offset": 8
    }
  ],
  "location": "Tester.I_am_a_Manual_Tester(String,DataTable)"
});
formatter.result({
  "duration": 1539100,
  "status": "passed"
});
formatter.match({
  "location": "Tester.I_apply_for_a_job()"
});
formatter.result({
  "duration": 276100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Good",
      "offset": 9
    }
  ],
  "location": "Tester.I_got_a_less_paid_job(String)"
});
formatter.result({
  "duration": 348600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Better",
      "offset": 6
    }
  ],
  "location": "Tester.I_am_not_satisfied_with_my_salary(String)"
});
formatter.result({
  "duration": 367400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Better",
      "offset": 16
    }
  ],
  "location": "Tester.My_parents_are_still_satisfied(String)"
});
formatter.result({
  "duration": 547200,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "I am a Manual Tester",
  "description": "",
  "id": "about-testers;i-am-a-manual-tester;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I am a \"Databse\" Tester",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "Location",
        "Position"
      ],
      "line": 9
    },
    {
      "cells": [
        "USA",
        "Contract"
      ],
      "line": 10
    },
    {
      "cells": [
        "India",
        "Permanent"
      ],
      "line": 11
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I apply for a job",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I got a \"Good\" paid job",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I am \"Better\" satisfied with my salary",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "My parents are \"Better\" satisfied",
  "matchedColumns": [
    3
  ],
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "Databse",
      "offset": 8
    }
  ],
  "location": "Tester.I_am_a_Manual_Tester(String,DataTable)"
});
formatter.result({
  "duration": 409600,
  "status": "passed"
});
formatter.match({
  "location": "Tester.I_apply_for_a_job()"
});
formatter.result({
  "duration": 89900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Good",
      "offset": 9
    }
  ],
  "location": "Tester.I_got_a_less_paid_job(String)"
});
formatter.result({
  "duration": 180000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Better",
      "offset": 6
    }
  ],
  "location": "Tester.I_am_not_satisfied_with_my_salary(String)"
});
formatter.result({
  "duration": 476300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Better",
      "offset": 16
    }
  ],
  "location": "Tester.My_parents_are_still_satisfied(String)"
});
formatter.result({
  "duration": 203800,
  "status": "passed"
});
});