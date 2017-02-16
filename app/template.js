const template = {
  "header": [
    {
      "parent_id": "",
      "label": "Patient Information",
      "options": {},
      "type": "section",
      "item_id": "60481281-E7F3-4EC3-8737-CED632C3C708"
    },
    {
      "parent_id": "60481281-E7F3-4EC3-8737-CED632C3C708",
      "label": "Medical Record Number:",
      "options": {},
      "type": "textsingle",
      "item_id": "f3245d46-ea77-11e1-aff1-0800200c9a66"
    },
    {
      "parent_id": "60481281-E7F3-4EC3-8737-CED632C3C708",
      "label": "Patient Name:",
      "options": {},
      "type": "textsingle",
      "item_id": "f3245d41-ea77-11e1-aff1-0800200c9a66"
    },
    {
      "parent_id": "60481281-E7F3-4EC3-8737-CED632C3C708",
      "label": "Type of Surgery:",
      "options": {},
      "type": "textsingle",
      "item_id": "f3245d40-ea77-11e1-aff1-0800200c9a66"
    },
    {
      "parent_id": "60481281-E7F3-4EC3-8737-CED632C3C708",
      "label": "Date/Time of Surgery:",
      "options": {},
      "type": "datetime",
      "item_id": "f3245d42-ea77-11e1-aff1-0800200c9a66"
    },
    {
      "parent_id": "60481281-E7F3-4EC3-8737-CED632C3C708",
      "label": "Surgeon:",
      "options": {},
      "type": "textsingle",
      "item_id": "f3245d43-ea77-11e1-aff1-0800200c9a66"
    },
    {
      "parent_id": "60481281-E7F3-4EC3-8737-CED632C3C708",
      "label": "Location:",
      "options": {},
      "type": "address",
      "item_id": "f3245d44-ea77-11e1-aff1-0800200c9a66"
    },
    {
      "parent_id": "60481281-E7F3-4EC3-8737-CED632C3C708",
      "label": "Assisting Personnel:",
      "options": {},
      "type": "text",
      "item_id": "f3245d45-ea77-11e1-aff1-0800200c9a66"
    }
  ],
  "items": [
    {
      "parent_id": "",
      "label": "Before induction of anaesthesia",
      "options": {},
      "type": "section",
      "item_id": "B1572DD2-8D98-4EFE-AFD4-B64D8EA2156D"
    },
    {
      "parent_id": "B1572DD2-8D98-4EFE-AFD4-B64D8EA2156D",
      "label": "Has the patient confirmed his/her identity, site, procedure, and consent?",
      "options": {
        "response_set": "91674924-55B0-42B5-B8BF-4740F9D05E08"
      },
      "type": "question",
      "item_id": "A0393E5E-A736-4A2D-8AD7-C4BF39C59266"
    },
    {
      "parent_id": "B1572DD2-8D98-4EFE-AFD4-B64D8EA2156D",
      "label": "Is the site marked?",
      "options": {
        "response_set": "91674924-55B0-42B5-B8BF-4740F9D05E08"
      },
      "type": "question",
      "item_id": "D1BAD0A2-B283-44AD-94A7-E5F072C09F00"
    },
    {
      "parent_id": "B1572DD2-8D98-4EFE-AFD4-B64D8EA2156D",
      "label": "Is the anaesthesia machine and medication check complete? ",
      "options": {
        "response_set": "91674924-55B0-42B5-B8BF-4740F9D05E08"
      },
      "type": "question",
      "item_id": "ABED4CCB-866A-4299-8106-14D14625B401"
    },
    {
      "parent_id": "B1572DD2-8D98-4EFE-AFD4-B64D8EA2156D",
      "label": "Is the pulse oximeter on the patient and functioning?",
      "options": {
        "response_set": "91674924-55B0-42B5-B8BF-4740F9D05E08"
      },
      "type": "question",
      "item_id": "FF89D3F5-86B2-4A0F-89C5-BDE298C3D336"
    },
    {
      "parent_id": "B1572DD2-8D98-4EFE-AFD4-B64D8EA2156D",
      "label": "Does the patient have a:",
      "options": {
        "visible_in_report": true,
        "visible_in_audit": true
      },
      "type": "information",
      "item_id": "7B95D560-6F71-44B9-B07E-C5EBB8DDE1E4"
    },
    {
      "parent_id": "7B95D560-6F71-44B9-B07E-C5EBB8DDE1E4",
      "label": "Known allergy?",
      "options": {
        "response_set": "94A8E4F7-5DC7-4CE1-AADE-2EA711E2F1AC"
      },
      "type": "question",
      "item_id": "BB76C7EB-0436-457A-B649-FA3170469B8B"
    },
    {
      "parent_id": "7B95D560-6F71-44B9-B07E-C5EBB8DDE1E4",
      "label": "Difficult airway or aspiration risk?",
      "options": {
        "response_set": "94A8E4F7-5DC7-4CE1-AADE-2EA711E2F1AC"
      },
      "type": "question",
      "item_id": "8D3FCCD6-1CA7-4FD0-9878-4FE8ACC5661D"
    },
    {
      "parent_id": "7B95D560-6F71-44B9-B07E-C5EBB8DDE1E4",
      "label": "Risk of >500ml blood loss (7ml/kg in children)?",
      "options": {
        "response_set": "6F2CC6F0-57CC-43A1-A9A2-594A8C8F03FF"
      },
      "type": "question",
      "item_id": "6BB6A0D0-1A61-4B70-9814-721F8875BE27"
    },
    {
      "parent_id": "",
      "label": "Before skin incision",
      "options": {},
      "type": "section",
      "item_id": "CC9CB0AC-34A2-4A73-8D30-71996F9C63B7"
    },
    {
      "parent_id": "CC9CB0AC-34A2-4A73-8D30-71996F9C63B7",
      "label": "Confirm all team members have introduced themselves by name and role",
      "options": {
        "response_set": "91674924-55B0-42B5-B8BF-4740F9D05E08"
      },
      "type": "question",
      "item_id": "712A99A3-F133-4CD6-B93D-0AFCE44375CC"
    },
    {
      "parent_id": "CC9CB0AC-34A2-4A73-8D30-71996F9C63B7",
      "label": "Confirm the patient's name, procedure, and where the incision will be made",
      "options": {
        "response_set": "91674924-55B0-42B5-B8BF-4740F9D05E08"
      },
      "type": "question",
      "item_id": "55959514-7746-4AA0-95E6-89863434C1E5"
    },
    {
      "parent_id": "CC9CB0AC-34A2-4A73-8D30-71996F9C63B7",
      "label": "Had antibiotic prophylaxis have been given within the last 60 minutes? ",
      "options": {
        "response_set": "91674924-55B0-42B5-B8BF-4740F9D05E08"
      },
      "type": "question",
      "item_id": "9E582846-0A5F-47EA-963C-DBFCC8D1391A"
    },
    {
      "parent_id": "CC9CB0AC-34A2-4A73-8D30-71996F9C63B7",
      "label": "Anticipated Critical Events",
      "options": {},
      "type": "category",
      "item_id": "25B960D0-5F31-407E-AF12-07984D93122B"
    },
    {
      "parent_id": "25B960D0-5F31-407E-AF12-07984D93122B",
      "label": "To Surgeon:",
      "options": {
        "visible_in_report": true,
        "visible_in_audit": true
      },
      "type": "information",
      "item_id": "869C6A93-F00F-43B6-ADBA-094E198072B5"
    },
    {
      "parent_id": "869C6A93-F00F-43B6-ADBA-094E198072B5",
      "label": "What are the critical or non-routine steps? ",
      "options": {},
      "type": "checkbox",
      "item_id": "80BB8B3A-219E-43A7-8743-65C37681B115"
    },
    {
      "parent_id": "80BB8B3A-219E-43A7-8743-65C37681B115",
      "label": "",
      "options": {
        "condition": "4e671f40-e4ff-11e1-aff1-0800200c9a66",
        "values": []
      },
      "type": "smartfield",
      "item_id": "1F88B9E4-EAE6-4CAF-BC51-12DD5954215D"
    },
    {
      "parent_id": "1F88B9E4-EAE6-4CAF-BC51-12DD5954215D",
      "label": "List critical or non-routine steps",
      "options": {
        "visible_in_report": true,
        "visible_in_audit": true
      },
      "type": "information",
      "item_id": "188D1A7F-3624-4157-9502-19B66A4FE1B6"
    },
    {
      "parent_id": "1F88B9E4-EAE6-4CAF-BC51-12DD5954215D",
      "label": "",
      "options": {
        "is_mandatory": false
      },
      "type": "text",
      "item_id": "B4904822-C19B-4D8B-A401-2C04BD599A3D"
    },
    {
      "parent_id": "869C6A93-F00F-43B6-ADBA-094E198072B5",
      "label": "",
      "options": {
        "visible_in_report": true,
        "visible_in_audit": true
      },
      "type": "information",
      "item_id": "C63A8A64-17E3-4387-9C50-A541A3B748F8"
    },
    {
      "parent_id": "869C6A93-F00F-43B6-ADBA-094E198072B5",
      "label": "How long will the case take?",
      "options": {},
      "type": "checkbox",
      "item_id": "5A239108-6A31-4E2A-A9FF-3D2BAE79755A"
    },
    {
      "parent_id": "5A239108-6A31-4E2A-A9FF-3D2BAE79755A",
      "label": "",
      "options": {
        "condition": "4e671f40-e4ff-11e1-aff1-0800200c9a66",
        "values": []
      },
      "type": "smartfield",
      "item_id": "E38FB4F9-2A7B-4C61-9C1B-58AF497519E2"
    },
    {
      "parent_id": "E38FB4F9-2A7B-4C61-9C1B-58AF497519E2",
      "label": "Include estimated time",
      "options": {
        "visible_in_report": true,
        "visible_in_audit": true
      },
      "type": "information",
      "item_id": "94AAFEE4-3240-4DCA-AE5C-3BDD9CA2C631"
    },
    {
      "parent_id": "E38FB4F9-2A7B-4C61-9C1B-58AF497519E2",
      "label": "",
      "options": {},
      "type": "text",
      "item_id": "954695F5-2F4B-45AC-916A-E77B45DE5AA3"
    },
    {
      "parent_id": "869C6A93-F00F-43B6-ADBA-094E198072B5",
      "label": "",
      "options": {
        "visible_in_report": true,
        "visible_in_audit": true
      },
      "type": "information",
      "item_id": "B5D6408F-1C59-4EFE-8FF7-977E0923D38F"
    },
    {
      "parent_id": "869C6A93-F00F-43B6-ADBA-094E198072B5",
      "label": "What is the anticipated blood loss?",
      "options": {},
      "type": "checkbox",
      "item_id": "492E0BB2-3572-4098-A941-A4E70A69587B"
    },
    {
      "parent_id": "492E0BB2-3572-4098-A941-A4E70A69587B",
      "label": "",
      "options": {
        "condition": "4e671f40-e4ff-11e1-aff1-0800200c9a66",
        "values": []
      },
      "type": "smartfield",
      "item_id": "5EF75037-7FC6-4264-AB89-903B4F81C257"
    },
    {
      "parent_id": "5EF75037-7FC6-4264-AB89-903B4F81C257",
      "label": "Include blood loss estimate ",
      "options": {
        "visible_in_report": true,
        "visible_in_audit": true
      },
      "type": "information",
      "item_id": "79861585-6EED-40E3-B225-CAA8437FB3C7"
    },
    {
      "parent_id": "5EF75037-7FC6-4264-AB89-903B4F81C257",
      "label": "",
      "options": {},
      "type": "text",
      "item_id": "EB130F1C-DBD1-497C-B557-0A5EBA2366DC"
    },
    {
      "parent_id": "CC9CB0AC-34A2-4A73-8D30-71996F9C63B7",
      "label": "",
      "options": {
        "visible_in_report": true,
        "visible_in_audit": true
      },
      "type": "information",
      "item_id": "CD4FB7C0-41C6-40EA-9A61-45BD63B32274"
    },
    {
      "parent_id": "CC9CB0AC-34A2-4A73-8D30-71996F9C63B7",
      "label": "To Anaesthetist:",
      "options": {
        "visible_in_report": true,
        "visible_in_audit": true
      },
      "type": "information",
      "item_id": "491869B2-9B40-4872-AD5E-146F783235DC"
    },
    {
      "parent_id": "491869B2-9B40-4872-AD5E-146F783235DC",
      "label": "Are there any patient specific concerns? ",
      "options": {
        "response_set": "94A8E4F7-5DC7-4CE1-AADE-2EA711E2F1AC"
      },
      "type": "question",
      "item_id": "FD802B6B-C817-4EF5-A0F2-10900E315E23"
    },
    {
      "parent_id": "CC9CB0AC-34A2-4A73-8D30-71996F9C63B7",
      "label": "",
      "options": {
        "visible_in_report": true,
        "visible_in_audit": true
      },
      "type": "information",
      "item_id": "2D0B6C0E-18D6-4977-AEFC-09A6A247725F"
    },
    {
      "parent_id": "CC9CB0AC-34A2-4A73-8D30-71996F9C63B7",
      "label": "To Nursing Team:",
      "options": {
        "visible_in_report": true,
        "visible_in_audit": true
      },
      "type": "information",
      "item_id": "BBF7D0AD-E3B6-48AD-82E2-47C4265683EA"
    },
    {
      "parent_id": "BBF7D0AD-E3B6-48AD-82E2-47C4265683EA",
      "label": "Has sterility (including indicator results) been confirmed?",
      "options": {
        "response_set": "91674924-55B0-42B5-B8BF-4740F9D05E08"
      },
      "type": "question",
      "item_id": "8411A6A2-42C6-4423-8F9E-5CDAAAD9BC9D"
    },
    {
      "parent_id": "BBF7D0AD-E3B6-48AD-82E2-47C4265683EA",
      "label": "Are there equipment issues or any concerns?",
      "options": {
        "response_set": "94A8E4F7-5DC7-4CE1-AADE-2EA711E2F1AC"
      },
      "type": "question",
      "item_id": "6F3C8310-6C2F-4915-B13E-83F813C45332"
    },
    {
      "parent_id": "6F3C8310-6C2F-4915-B13E-83F813C45332",
      "label": "",
      "options": {
        "condition": "3f206182-e4f6-11e1-aff1-0800200c9a66",
        "values": [
          "8bcfbf00-e11b-11e1-9b23-0800200c9a66"
        ]
      },
      "type": "smartfield",
      "item_id": "65133B41-CCED-4736-B93E-0705F150116D"
    },
    {
      "parent_id": "65133B41-CCED-4736-B93E-0705F150116D",
      "label": "List concerns",
      "options": {
        "visible_in_report": true,
        "visible_in_audit": true
      },
      "type": "information",
      "item_id": "4FBEB783-B66A-49F7-8116-336B1781EDC8"
    },
    {
      "parent_id": "65133B41-CCED-4736-B93E-0705F150116D",
      "label": "",
      "options": {},
      "type": "text",
      "item_id": "E39E9D87-AF92-4FD3-94FA-9809C5BA6D39"
    },
    {
      "parent_id": "CC9CB0AC-34A2-4A73-8D30-71996F9C63B7",
      "label": "",
      "options": {
        "visible_in_report": true,
        "visible_in_audit": true
      },
      "type": "information",
      "item_id": "F23E2B8A-3D95-4F96-9B83-0D30AF08E1ED"
    },
    {
      "parent_id": "CC9CB0AC-34A2-4A73-8D30-71996F9C63B7",
      "label": "Is essential imaging displayed?",
      "options": {
        "response_set": "91674924-55B0-42B5-B8BF-4740F9D05E08"
      },
      "type": "question",
      "item_id": "E8A627FA-8477-46B5-B049-97BE2100A2B5"
    },
    {
      "parent_id": "",
      "label": "Before patient leaves operating room",
      "options": {},
      "type": "section",
      "item_id": "88A53348-B6F9-448D-84D1-D82B4C2A318C"
    },
    {
      "parent_id": "88A53348-B6F9-448D-84D1-D82B4C2A318C",
      "label": "Nurse Verbally Confirms:",
      "options": {
        "visible_in_report": true,
        "visible_in_audit": true
      },
      "type": "information",
      "item_id": "00F76492-3912-4FC0-895A-6D7DDD7D0CD3"
    },
    {
      "parent_id": "00F76492-3912-4FC0-895A-6D7DDD7D0CD3",
      "label": "The name of the procedure?",
      "options": {
        "response_set": "91674924-55B0-42B5-B8BF-4740F9D05E08"
      },
      "type": "question",
      "item_id": "D5C6C594-339A-40C4-8760-0660C1210C1C"
    },
    {
      "parent_id": "00F76492-3912-4FC0-895A-6D7DDD7D0CD3",
      "label": "Completion of instrument, sponge and needle counts",
      "options": {
        "response_set": "91674924-55B0-42B5-B8BF-4740F9D05E08"
      },
      "type": "question",
      "item_id": "4A75A5FB-FC73-4217-B471-1DC2B96D81AF"
    },
    {
      "parent_id": "00F76492-3912-4FC0-895A-6D7DDD7D0CD3",
      "label": "Specimen labelling (read specimen labels aloud, including patient name)",
      "options": {
        "response_set": "91674924-55B0-42B5-B8BF-4740F9D05E08"
      },
      "type": "question",
      "item_id": "337E516E-C69B-42E5-915E-F050C470DEE6"
    },
    {
      "parent_id": "00F76492-3912-4FC0-895A-6D7DDD7D0CD3",
      "label": "Whether there are any equipment problems to be addressed",
      "options": {
        "response_set": "91674924-55B0-42B5-B8BF-4740F9D05E08"
      },
      "type": "question",
      "item_id": "FAD6E66E-C8B8-43A8-94C0-DDD46E99E739"
    },
    {
      "parent_id": "88A53348-B6F9-448D-84D1-D82B4C2A318C",
      "label": "To Surgeon, Anaesthetist and Nurse:",
      "options": {
        "visible_in_report": true,
        "visible_in_audit": true
      },
      "type": "information",
      "item_id": "F9D846B9-7B4D-4031-A1FB-085CE3589D87"
    },
    {
      "parent_id": "F9D846B9-7B4D-4031-A1FB-085CE3589D87",
      "label": "Are there any key concerns for recovery and management of this patient? ",
      "options": {
        "response_set": "94A8E4F7-5DC7-4CE1-AADE-2EA711E2F1AC"
      },
      "type": "question",
      "item_id": "B839C4D3-198F-41AC-BE59-AE1A535B8102"
    },
    {
      "parent_id": "88A53348-B6F9-448D-84D1-D82B4C2A318C",
      "label": "",
      "options": {
        "visible_in_report": true,
        "visible_in_audit": true
      },
      "type": "information",
      "item_id": "A5F8AE77-DDFA-4994-9A5E-E94056BB8D4C"
    },
    {
      "parent_id": "88A53348-B6F9-448D-84D1-D82B4C2A318C",
      "label": "Surgeons name and signature",
      "options": {},
      "type": "signature",
      "item_id": "45DA8209-7443-4322-AA20-A71195DA4338"
    }
  ],
  "export_profiles": {
    "CC14DAA7-84F0-4C2C-BF4C-BD94321B4FC4": {
      "disclaimer_page_colour_title": "0.0,0.0,0.0",
      "appendix_text": "Appendix",
      "csv_include_media": true,
      "title_page_divider_colour": "0.0,0.0,0.0",
      "media_page_orientation": "portrait",
      "page_number_colour": "0.0,0.0,0.0",
      "audit_page_section_visible": true,
      "omit_score_equal_one": false,
      "title_page_header_colour": "0.0,0.0,0.0",
      "audit_page_category_font": "HelveticaNeue-Bold:13.0",
      "cover_page_font_title": "TrebuchetMS:25.0",
      "extra_page_3_text": "Please go into the exporting options to change the extra page text.",
      "audit_page_question_show_response_colour": true,
      "page_title_margin": "20.0",
      "toc_colour_sub": "0,0,0",
      "export_email_body_1": "iAuditor - %t",
      "audit_page_question_solid_response_colour": true,
      "extra_page_2_title_visible": true,
      "followups_page_visible": true,
      "media_colour": "0.0,0.0,0.0",
      "disclaimer_title": "Disclaimer",
      "table_header_background_colour": "230.0,230.0,230.0",
      "omit_score_none": false,
      "page_number_font": "HelveticaNeue-Bold:11.0",
      "toc_font_main": "HelveticaNeue-Bold:12.0",
      "title_page_line_2_font": "HelveticaNeue-Bold:35.0",
      "title_page_line_1_colour": "0.0,0.0,0.0",
      "extra_page_2_visible": false,
      "extra_page_3_orientation": "portrait",
      "media_per_row": "2",
      "csv_image_resolution": "high",
      "title_page_visible": true,
      "toc_indent": "10.0",
      "export_default_email_cc": "",
      "export_send_webdav": false,
      "audit_page_section_colour": "0.0,0.0,0.0",
      "media_resolution": "medium",
      "title_page_logo_visible": true,
      "thumbnail_per_row": "6",
      "extra_page_1_orientation": "portrait",
      "statement_text": "In order to maintain the integrity and credibility of the risk assessment processes and to protect the parties involved, it is understood that the assessors will not divulge to unauthorized persons any information obtained during this risk assessment unless legally obligated to do so.",
      "audit_page_category_colour": "0.0,0.0,0.0",
      "thumbnail_font": "HelveticaNeue:8.0",
      "extra_page_2_text": "Please go into the exporting options to change the extra page text.",
      "table_margin": "30.0",
      "xml_image_resolution": "high",
      "statement_title": "Confidentiality Statement",
      "title_page_logo_size": "150.0",
      "statement_visible": true,
      "title_page_score_text": "Score",
      "media_quality": "high",
      "title_page_divider_font": "HelveticaNeue-Bold:18.0",
      "toc_page_title": "Table of Contents",
      "title_page_divider_visible": true,
      "pdf_content_page_count": "1",
      "disclaimer_visible": true,
      "footer_score_text": "Score ",
      "audit_page_visible": true,
      "title_page_text_font": "HelveticaNeue:12.0",
      "omit_empty_categories": false,
      "footer_section_score_visible": true,
      "disclaimer_page_font_title": "HelveticaNeue-Bold:12.0",
      "title_page_text_margin": "10.0",
      "extra_page_1_visible": false,
      "export_show_hidden_items": false,
      "title_page_text_colour": "0.0,0.0,0.0",
      "audit_page_address_show_coords": true,
      "export_word": false,
      "cover_page_logo_type": "profile",
      "extra_page_1_title_visible": true,
      "cover_page_font_date": "TrebuchetMS:30.0",
      "title_page_score_visible": true,
      "table_cell_padding": "7.0",
      "title_page_divider_text": "conducted for",
      "table_header_colour": "0.0,0.0,0.0",
      "title_page_line_2_colour": "0.0,0.0,0.0",
      "media_page_title_colour": "0.0,0.0,0.0",
      "timestamp": "2015-07-15T07:04:34.805Z",
      "document_number_font": "HelveticaNeue:11.0",
      "extra_page_1_text": "Please go into the exporting options to change the extra page text.",
      "export_default_email": "tania.clarke@safetyculture.io",
      "media_page_visible": true,
      "cover_page_colour_title_text": "255.0,255.0,255.0",
      "csv_zip_files": true,
      "title_page_line_1": "template",
      "export_email_file": "%t - %c - %d",
      "media_page_title_visible": true,
      "revision_id": "710557EA-8F45-4733-AEE7-8308199F03EE",
      "disclaimer_page_colour_text": "0.0,0.0,0.0",
      "toc_colour_main": "0,0,0",
      "extra_page_2_orientation": "portrait",
      "export_default_email_bcc": "",
      "cover_page_colour_title_border": "255.0,255.0,255.0",
      "column_3_title": "Details",
      "extra_page_title_font": "HelveticaNeue-Bold:16.0",
      "csv_line_endings": "cr",
      "toc_font_sub": "HelveticaNeue:12.0",
      "csv_email_info": true,
      "table_header_font": "HelveticaNeue:12.0",
      "extra_page_text_colour": "0.0,0.0,0.0",
      "column_2_title": "Response",
      "audit_page_item_font": "HelveticaNeue:11.0",
      "media_page_title_font": "HelveticaNeue-Bold:16.0",
      "media_padding": "10",
      "disclaimer_margin": "20.0",
      "disclaimer_title_margin": "5.0",
      "document_number_colour": "0.0,0.0,0.0",
      "toc_visible": true,
      "export_template": false,
      "column_1_title": "Question",
      "cover_page_colour_date_text": "255.0,255.0,255.0",
      "extra_page_2_title": "Extra Page 2",
      "cover_page_logo_visible": true,
      "extra_page_1_title": "Extra Page 1",
      "disclaimer_page_font_text": "HelveticaNeue:12.0",
      "audit_page_category_background_colour": "255.0,255.0,255.0",
      "cover_page_colour_title_background": "76.0,127.0,191.0",
      "toc_font_page_title": "HelveticaNeue-Bold:16.0",
      "export_close_exporting": false,
      "audit_page_item_background_colour": "255.0,255.0,255.0",
      "cover_page_colour_background": "170.0,186.0,89.0",
      "audit_page_category_show_score": true,
      "export_send_dropbox": false,
      "toc_number_width": "30.0",
      "csv_image_quality": "medium",
      "identifier": "CC14DAA7-84F0-4C2C-BF4C-BD94321B4FC4",
      "title_page_line_2": "client",
      "csv_escape_html": true,
      "export_email_subject": "%t - %c - %d",
      "omit_empty_sections": false,
      "page_margin": "60.0",
      "toc_colour_page_title": "0,0,0",
      "omit_score_greater_one": false,
      "media_page_title": "Media",
      "export_csv": false,
      "title_page_header_margin": "2.0",
      "document_number_visible": true,
      "toc_page_title_visible": true,
      "title_page_header_font": "HelveticaNeue-Bold:12.0",
      "toc_number_margin": "20.0",
      "extra_page_text_font": "HelveticaNeue:12.0",
      "export_report": false,
      "disclaimer_page_orientation": "portrait",
      "export_email_body_4": "Date: %d | Score: %s/%r",
      "disclaimer_text": "The assessors believe the information contained within this risk assessment report to be correct at the time of printing. The assessors do not accept responsibility for any consequences arising from the use of the information herein. The report is based on matters which were observed or came to the attention of the assessors during the day of the assessment and should not be relied upon as an exhaustive record of all possible risks or hazards that may exist or potential improvements that can be made.\n\nInformation on the latest workers compensation and OHS / WHS laws can be found at the relevant State WorkCover / WorkSafe Authority.",
      "omit_unchecked_checkboxes": false,
      "title_page_logo_type": "template",
      "extra_page_3_title_visible": true,
      "cover_page_logo_size": "250.0",
      "extra_page_title_colour": "0.0,0.0,0.0",
      "audit_page_section_show_score": true,
      "audit_page_category_score_colour": "0.0,0.0,0.0",
      "column_3_width": "43.0",
      "title_page_divider_margin": "10.0",
      "audit_page_orientation": "portrait",
      "csv_media_subdirectory": true,
      "thumbnail_colour": "0.0,0.0,0.0",
      "thumbnail_padding": "5",
      "profile_name": "WHO",
      "title_page_line_1_visible": true,
      "footer_audit_title_visible": true,
      "cover_page_visible": false,
      "export_pdf": true,
      "omit_score_equal_zero": false,
      "column_2_width": "14.0",
      "export_email_body_3": "Client: %c",
      "audit_page_item_colour": "0.0,0.0,0.0",
      "title_page_orientation": "portrait",
      "toc_score_visible": true,
      "title_page_line_2_visible": true,
      "title_page_finished_visible": true,
      "export_email_enable_dynamic_text": true,
      "title_page_line_1_font": "HelveticaNeue-Bold:32.0",
      "page_height": "842.0",
      "toc_orientation": "portrait",
      "column_1_width": "43.0",
      "omit_score_unanswered": false,
      "page_number_visible": true,
      "toc_item_spacing": "3.0",
      "audit_page_section_font": "HelveticaNeue-Bold:15.0",
      "toc_page_count": "1",
      "audit_page_category_score_font": "HelveticaNeue:11.0",
      "extra_page_3_visible": false,
      "table_cell_border_width": "1.0",
      "xml_image_quality": "medium",
      "media_font": "HelveticaNeue:12.0",
      "export_send_email": true,
      "export_email_body_2": "Template: %l",
      "page_width": "595.0",
      "extra_page_3_title": "Extra Page 3",
      "omit_checked_checkboxes": false,
      "audit_page_footer_margin": "20.0",
      "title_page_finished_text": "Completed on",
      "thumbnail_visible": true,
      "cover_page_orientation": "portrait"
    }
  },
  "revision_key": "1E90D7E7-BF20-4BD8-9027-EBD1E1D8ACA0",
  "server_revision_key": "1DB7BC39-DDD7-4018-8FF0-9FB9B0F8124B",
  "template_id": "template_4A2F5535DE4F4913924760E0F68C3D79",
  "template_data": {
    "authorship": {
      "author": {
        "id": "user_bfc3130d00bd4b0c91cfbaa5bc5eaa20",
        "name": "Tania Clarke",
        "context": "user"
      },
      "owner": {
        "id": "user_bfc3130d00bd4b0c91cfbaa5bc5eaa20",
        "name": "Tania Clarke",
        "context": "user"
      },
      "country": "au",
      "date_downloaded": null,
      "device_id": "E17CD591-7BB1-4C3F-B486-60D70F1E8A08",
      "date_created": "2015-07-15T04:21:55.000Z",
      "version": "2.0i",
      "date_modified": "2015-07-16T03:36:15.000Z",
      "language": "en",
      "date_synced": null
    },
    "response_sets": {
      "6F2CC6F0-57CC-43A1-A9A2-594A8C8F03FF": {
        "id": "6F2CC6F0-57CC-43A1-A9A2-594A8C8F03FF",
        "type": "question",
        "responses": [
          {
            "colour": "61,192,139",
            "score": 1,
            "id": "D1AFE52C-FF48-4F7F-A37B-CA0A23915F50",
            "enable_score": true,
            "image": "",
            "short_label": "",
            "label": "No",
            "type": "text"
          },
          {
            "colour": "61,192,139",
            "score": 1,
            "id": "FC8BB5C1-6AB2-4149-883C-AD5B813ECE11",
            "enable_score": true,
            "image": "",
            "short_label": "",
            "label": "Yes & 2 IV/central access & fluids planned",
            "type": "text"
          }
        ]
      },
      "94A8E4F7-5DC7-4CE1-AADE-2EA711E2F1AC": {
        "id": "94A8E4F7-5DC7-4CE1-AADE-2EA711E2F1AC",
        "type": "question",
        "responses": [
          {
            "colour": "61,192,139",
            "score": 1,
            "id": "69713794-C273-4322-B903-1650692B2860",
            "enable_score": true,
            "image": "",
            "short_label": "",
            "label": "No",
            "type": "text"
          },
          {
            "colour": "255,0,21",
            "score": 0,
            "id": "A71844D0-4DC5-4133-B38F-A8D99A593C4E",
            "enable_score": true,
            "image": "",
            "short_label": "",
            "label": "Yes",
            "type": "text"
          }
        ]
      },
      "91674924-55B0-42B5-B8BF-4740F9D05E08": {
        "id": "91674924-55B0-42B5-B8BF-4740F9D05E08",
        "type": "question",
        "responses": [
          {
            "colour": "61,192,139",
            "score": 1,
            "id": "B6B46442-3788-410D-81E5-92DEC01EA25A",
            "enable_score": true,
            "image": "",
            "short_label": "",
            "label": "Yes",
            "type": "text"
          },
          {
            "colour": "255,0,21",
            "score": 0,
            "id": "4155621E-25F7-4EEE-B2BF-AC4D9BC8283C",
            "enable_score": true,
            "image": "",
            "short_label": "",
            "label": "No",
            "type": "text"
          }
        ]
      }
    },
    "media": {
      "447CE849-45DD-4258-B8B2-144EFFA3E517": {
        "media_id": "447CE849-45DD-4258-B8B2-144EFFA3E517",
        "date_created": "2015-07-15T06:55:45.000Z",
        "file_ext": "jpg",
        "label": "Template Image"
      }
    },
    "mandatory_mark_as_complete": false,
    "metrics": {
      "est_duration": -1,
      "avg_duration": -1,
      "date_last_used": -1,
      "use_count": 0,
      "rating": -1
    },
    "in_trash_can": false,
    "metadata": {
      "doc_no": "[number]",
      "doc_no_prefix": "",
      "subindustry": 2,
      "image": "447CE849-45DD-4258-B8B2-144EFFA3E517",
      "doc_no_suffix": "",
      "description": "The WHO Surgical Safety Checklist was developed after extensive consultation aiming to decrease errors and adverse events, and increase teamwork and communication in surgery.<br/><br/>The surgical checklist has gone on to show significant reduction in both morbidity and mortality and is now used by a majority of surgical providers around the world. The checklist is not intended to be comprehensive. Additions and modifications to fit local practice are encouraged. ",
      "industry": 10,
      "name": "World Health Organization Surgical Safety Checklist"
    }
  },
  "type": "template",
  "deleted": false,
  "trashed": false,
  "name": "World Health Organization Surgical Safety Checklist",
  "_id": "template_4A2F5535DE4F4913924760E0F68C3D79",
  "libraryId": "template_4A2F5535DE4F4913924760E0F68C3D79"
};

export default template;
