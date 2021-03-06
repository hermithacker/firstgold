# -*- encoding : utf-8 -*-
require 'spec_helper'

describe "/npcs/edit.html.erb" do
  include NpcsHelper

  before(:each) do
    assigns[:npc] = @npc = stub_model(Npc,
      :new_record? => false,
      :name => "value for name",
      :description => "value for description",
      :str => 1,
      :agi => 1,
      :spr => 1,
      :hp => 1,
      :mp => 1,
      :scenario_id => 1
    )
  end

  it "renders the edit npc form" do
    render

    response.should have_tag("form[action=#{npc_path(@npc)}][method=post]") do
      with_tag('input#npc_name[name=?]', "npc[name]")
      with_tag('textarea#npc_description[name=?]', "npc[description]")
      with_tag('input#npc_str[name=?]', "npc[str]")
      with_tag('input#npc_agi[name=?]', "npc[agi]")
      with_tag('input#npc_spr[name=?]', "npc[spr]")
      with_tag('input#npc_hp[name=?]', "npc[hp]")
      with_tag('input#npc_mp[name=?]', "npc[mp]")
      with_tag('input#npc_scenario_id[name=?]', "npc[scenario_id]")
    end
  end
end
