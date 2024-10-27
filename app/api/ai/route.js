import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { phone, task } = await request.json();

    const headers = {
      Authorization: `${process.env.BLAND_API_KEY}`,
      "Content-Type": "application/json",
    };

    const data = {
      phone_number: phone,
      from: null,
      task: task,
      model: "turbo",
      language: "en",
      voice: "Alexa",
      voice_settings: {},
      pathway_id: null,
      local_dialing: false,
      max_duration: 3,
      answered_by_enabled: false,
      wait_for_greeting: false,
      record: false,
      amd: false,
      interruption_threshold: 100,
      voicemail_message: null,
      temperature: null,
      transfer_phone_number: null,
      transfer_list: {},
      metadata: null,
      pronunciation_guide: [],
      start_time: null,
      background_track: "none",
      request_data: {},
      tools: [],
      dynamic_data: [],
      analysis_preset: null,
      analysis_schema: {},
      webhook: null,
      calendly: {},
    };

    // Make the API call to Bland AI
    const response = await fetch("https://us.api.bland.ai/v1/calls", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    });

    // Check if the API call was successful
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`API call failed: ${JSON.stringify(errorData)}`);
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error in API call:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Internal server error",
      },
      { status: 500 }
    );
  }
}
