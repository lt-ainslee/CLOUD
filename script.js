const steps = [
  {
    id: "step-1",
    label: "Step 1",
    title: "Boc-Glu(OBzl)-Ala-OBzl 的合成",
    equation: "Boc-Glu(OBzl) + H-Ala-OBzl·Tos → Boc-Glu(OBzl)-Ala-OBzl",
    procedure: [
      "将 Boc-Glu(OBzl) 加入干燥反应瓶，用无水 THF 溶解或分散，加入 HOBt 后冰浴搅拌约 10 min。",
      "DCC 用少量无水 THF 溶解后滴加到体系中，继续冰浴 5-15 min 完成预活化。",
      "加入 H-Ala-OBzl·Tos 固体或其 THF 悬液，随后缓慢加入 NMM，先中和对甲苯磺酸盐，再补 0.2-0.5 eq 过量碱。",
      "撤去冰浴，室温搅拌 12-24 h；用 TLC（CH2Cl2/CH3OH = 20:1，茚三酮显色）监测胺组分消失。",
      "反应结束后冷却至 0-5 °C 保持 20-60 min 促使 DCU 析出，必要时补加少量 EtOAc 稀释后过滤除去 DCU。",
      "滤液减压浓缩，残渣用 EtOAc 重溶，依次用 5% NaHCO3、5% KHSO4 和饱和 NaCl 水溶液洗涤，必要时重复 1-2 轮。",
      "有机层经无水 Na2SO4 干燥、过滤、浓缩，必要时柱层析纯化得到产物。"
    ],
    product: { name: "Boc-Glu(OBzl)-Ala-OBzl", mw: 498.57 },
    rows: [
      { name: "Boc-Glu(OBzl)", role: "羧酸组分", mw: 337.37, eq: "1.00", ratio: 1.0, stoich: 1, note: "理论产量参与计算" },
      { name: "HOBt", role: "缩合助剂", mw: 153.15, eq: "1.00", ratio: 1.0, note: "通常与羧酸组分等当量" },
      { name: "DCC", role: "活化剂", mw: 206.33, eq: "1.05-1.10", ratio: 1.05, note: "通常略过量" },
      { name: "H-Ala-OBzl·Tos", role: "胺组分", mw: 351.42, eq: "1.00", ratio: 1.0, stoich: 1, note: "理论产量参与计算" },
      { name: "NMM", role: "有机碱", mw: 101.15, eq: "2.20-3.00", ratio: 2.2, note: "先中和对甲苯磺酸盐，再补少量过量碱" }
    ]
  },
  {
    id: "step-2",
    label: "Step 2",
    title: "Glu(OBzl)-Ala-OBzl·HCl 的合成",
    equation: "Boc-Glu(OBzl)-Ala-OBzl → Glu(OBzl)-Ala-OBzl·HCl",
    procedure: [
      "将 Boc-Glu(OBzl)-Ala-OBzl 置于干燥反应瓶中，冰浴搅拌下加入 4 N HCl/EA，保持体系无水。",
      "继续冰浴反应 0.5-4 h，并以 TLC 监测至原料消失后停止反应。",
      "减压除去溶剂与过量酸，再用干燥 EtOAc 共蒸 2-3 次以尽量除酸。",
      "加入石油醚打浆，静置后倾去上清并减压干燥，得到盐酸盐粗品。",
      "该中间体通常不再纯化，直接用于下一步反应。"
    ],
    product: { name: "Glu(OBzl)-Ala-OBzl·HCl", mw: 434.91 },
    rows: [
      { name: "Boc-Glu(OBzl)-Ala-OBzl", role: "底物", mw: 498.57, eq: "1.00", ratio: 1.0, stoich: 1, note: "理论产量参与计算" }
    ]
  },
  {
    id: "step-3",
    label: "Step 3",
    title: "Boc-Gly-Glu(OBzl)-Ala-OBzl 的合成",
    equation: "Boc-Gly + Glu(OBzl)-Ala-OBzl·HCl → Boc-Gly-Glu(OBzl)-Ala-OBzl",
    procedure: [
      "将 Boc-Gly 溶于无水 THF，加入 HOBt 后冰浴搅拌约 10 min。",
      "DCC 用少量无水 THF 溶解后滴加，继续冰浴 5-15 min 完成预活化。",
      "加入 Glu(OBzl)-Ala-OBzl·HCl 固体或其 THF/少量 DMF 悬液，最后缓慢加入 NMM，先中和盐酸盐，再补少量过量碱。",
      "撤去冰浴，室温搅拌 12-24 h；用 TLC 配合茚三酮显色监测胺组分消失。",
      "反应后先冷却至 0-5 °C 使 DCU 析出；若 DMF 比例较高或 DCU 颗粒较细，可先加 EtOAc 或 2-MeTHF 稀释后过滤。",
      "滤液转入分液漏斗，依次水洗 1 次、5% LiCl 水溶液洗 2-3 次、饱和 NaCl 洗 1 次；必要时再辅以 5% NaHCO3 或 5% KHSO4 快速洗涤。",
      "有机层经无水 Na2SO4 干燥、过滤、浓缩，必要时柱层析纯化得到产物。"
    ],
    product: { name: "Boc-Gly-Glu(OBzl)-Ala-OBzl", mw: 555.62 },
    rows: [
      { name: "Boc-Gly", role: "羧酸组分", mw: 175.18, eq: "1.00", ratio: 1.0, stoich: 1, note: "理论产量参与计算" },
      { name: "HOBt", role: "缩合助剂", mw: 153.15, eq: "1.00", ratio: 1.0, note: "通常与羧酸组分等当量" },
      { name: "DCC", role: "活化剂", mw: 206.33, eq: "1.05-1.10", ratio: 1.05, note: "通常略过量" },
      { name: "Glu(OBzl)-Ala-OBzl·HCl", role: "胺组分", mw: 434.91, eq: "1.00", ratio: 1.0, stoich: 1, note: "理论产量参与计算" },
      { name: "NMM", role: "有机碱", mw: 101.15, eq: "2.20-3.00", ratio: 2.2, note: "先中和胺盐，再补少量过量碱" }
    ]
  },
  {
    id: "step-4",
    label: "Step 4",
    title: "Gly-Glu(OBzl)-Ala-OBzl·HCl 的合成",
    equation: "Boc-Gly-Glu(OBzl)-Ala-OBzl → Gly-Glu(OBzl)-Ala-OBzl·HCl",
    procedure: [
      "将 Boc-Gly-Glu(OBzl)-Ala-OBzl 置于干燥反应瓶中，冰浴下加入 4 N HCl/EA 并保持无水。",
      "继续搅拌 0.5-4 h，用 TLC 监测至原料消失。",
      "减压除去溶剂和酸，再用干燥 EtOAc 共蒸 2-3 次。",
      "最后以石油醚打浆并减压干燥，得到盐酸盐粗品。",
      "该中间体通常不再纯化，直接带盐进入下一步。"
    ],
    product: { name: "Gly-Glu(OBzl)-Ala-OBzl·HCl", mw: 491.96 },
    rows: [
      { name: "Boc-Gly-Glu(OBzl)-Ala-OBzl", role: "底物", mw: 555.62, eq: "1.00", ratio: 1.0, stoich: 1, note: "理论产量参与计算" }
    ]
  },
  {
    id: "step-5",
    label: "Step 5",
    title: "Boc-Asp(OBzl)-Gly-Glu(OBzl)-Ala-OBzl 的合成",
    equation: "Boc-Asp(OBzl) + Gly-Glu(OBzl)-Ala-OBzl·HCl → Boc-Asp(OBzl)-Gly-Glu(OBzl)-Ala-OBzl",
    procedure: [
      "将 Boc-Asp(OBzl) 用无水 THF 溶解或均匀分散，加入 HOBt 后冰浴搅拌约 10 min。",
      "DCC 用少量无水 THF 溶解后滴加到反应液中，继续冰浴 5-15 min 形成活化体系。",
      "加入 Gly-Glu(OBzl)-Ala-OBzl·HCl 固体或其 THF/DMF 悬液，最后缓慢加入 NMM，先中和盐酸盐，再补少量过量碱。",
      "撤去冰浴，室温搅拌约 8-12 h，必要时延长，并以 TLC/茚三酮跟踪终点。",
      "反应结束后按 Step 3 的后处理执行：先低温析出 DCU，必要时用 EtOAc 或 2-MeTHF 稀释后过滤。",
      "滤液依次经水洗、5% LiCl 水溶液洗 2-3 次及饱和 NaCl 洗 1 次后干燥浓缩，必要时再做简短酸洗或碱洗。",
      "必要时柱层析纯化，得到目标化合物。"
    ],
    product: { name: "Boc-Asp(OBzl)-Gly-Glu(OBzl)-Ala-OBzl", mw: 760.83 },
    rows: [
      { name: "Boc-Asp(OBzl)", role: "羧酸组分", mw: 323.34, eq: "1.00", ratio: 1.0, stoich: 1, note: "理论产量参与计算" },
      { name: "HOBt", role: "缩合助剂", mw: 153.15, eq: "1.00", ratio: 1.0, note: "通常与羧酸组分等当量" },
      { name: "DCC", role: "活化剂", mw: 206.33, eq: "1.05-1.10", ratio: 1.05, note: "通常略过量" },
      { name: "Gly-Glu(OBzl)-Ala-OBzl·HCl", role: "胺组分", mw: 491.96, eq: "1.00", ratio: 1.0, stoich: 1, note: "理论产量参与计算" },
      { name: "NMM", role: "有机碱", mw: 101.15, eq: "2.20-3.00", ratio: 2.2, note: "先中和胺盐，再补少量过量碱" }
    ]
  },
  {
    id: "step-6",
    label: "Step 6",
    title: "Asp(OBzl)-Gly-Glu(OBzl)-Ala-OBzl·HCl 的合成",
    equation: "Boc-Asp(OBzl)-Gly-Glu(OBzl)-Ala-OBzl → Asp(OBzl)-Gly-Glu(OBzl)-Ala-OBzl·HCl",
    procedure: [
      "将 Boc-Asp(OBzl)-Gly-Glu(OBzl)-Ala-OBzl 置于干燥反应瓶中，冰浴下加入 4 N HCl/EA。",
      "继续搅拌 0.5-4 h，以 TLC 监测至原料消失。",
      "减压除去溶剂与酸后，用干燥 EtOAc 共蒸 2-3 次。",
      "再以石油醚打浆并减压干燥，得到盐酸盐粗品。",
      "该中间体通常不纯化，直接用于后续与 Boc-Glu(OBzl) 的缩合。"
    ],
    product: { name: "Asp(OBzl)-Gly-Glu(OBzl)-Ala-OBzl·HCl", mw: 697.17 },
    rows: [
      { name: "Boc-Asp(OBzl)-Gly-Glu(OBzl)-Ala-OBzl", role: "底物", mw: 760.83, eq: "1.00", ratio: 1.0, stoich: 1, note: "理论产量参与计算" }
    ]
  },
  {
    id: "step-7",
    label: "Step 7",
    title: "Boc-Glu(OBzl)-Asp(OBzl)-Gly-Glu(OBzl)-Ala-OBzl 的合成",
    equation: "Boc-Glu(OBzl) + Asp(OBzl)-Gly-Glu(OBzl)-Ala-OBzl·HCl → Boc-Glu(OBzl)-Asp(OBzl)-Gly-Glu(OBzl)-Ala-OBzl",
    procedure: [
      "将 Boc-Glu(OBzl) 加入干燥反应瓶，用无水 THF 或 THF/少量 DMF 混合溶剂溶解，加入 HOBt 后冰浴搅拌约 10 min。",
      "DCC 用少量无水 THF 溶解后滴加，继续冰浴 5-15 min，活化 Boc-Glu(OBzl) 的游离羧基。",
      "加入 Asp(OBzl)-Gly-Glu(OBzl)-Ala-OBzl·HCl 固体或其 THF/DMF 悬液，最后缓慢加入 NMM，先中和四肽盐酸盐，再补 0.2-0.5 eq 过量碱。",
      "撤去冰浴后室温搅拌 12-24 h；用 TLC 配合茚三酮显色监测四肽胺盐酸盐消失，必要时可补加少量活化后的 Boc-Glu(OBzl)。",
      "反应结束后冷却至 0-5 °C 放置 30-60 min 促使 DCU 析出；若体系较稠或 DMF 比例较高，可补加 EtOAc 或 2-MeTHF 稀释后过滤。",
      "滤液转入分液漏斗，依次水洗 1 次、5% LiCl 水溶液洗 2-3 次、饱和 NaCl 洗 1 次；必要时根据 TLC 结果再做简短 5% NaHCO3 或 5% KHSO4 洗涤。",
      "有机层经无水 Na2SO4 干燥、过滤、浓缩；若仍显黏稠，可先稀释后再浓缩，必要时柱层析纯化得到产物。"
    ],
    product: { name: "Boc-Glu(OBzl)-Asp(OBzl)-Gly-Glu(OBzl)-Ala-OBzl", mw: 980.06 },
    rows: [
      { name: "Boc-Glu(OBzl)", role: "谷氨酸引入片段", mw: 337.37, eq: "1.00", ratio: 1.0, stoich: 1, note: "唯一游离羧基参与缩合；理论产量参与计算" },
      { name: "HOBt", role: "缩合助剂", mw: 153.15, eq: "1.00", ratio: 1.0, note: "对应一个游离羧基" },
      { name: "DCC", role: "活化剂", mw: 206.33, eq: "1.05-1.10", ratio: 1.05, note: "对应一个游离羧基" },
      { name: "Asp(OBzl)-Gly-Glu(OBzl)-Ala-OBzl·HCl", role: "四肽胺组分", mw: 697.17, eq: "1.00-1.10", ratio: 1.0, stoich: 1, note: "可将胺组分微量过量；理论产量参与计算" },
      { name: "NMM", role: "有机碱", mw: 101.15, eq: "2.20-3.00", ratio: 2.2, note: "先中和四肽盐酸盐，再补 0.2-0.5 eq" }
    ]
  }
];

const pickupMaterials = [
  { name: "Boc-Glu(OBzl)", mw: 337.37, eq: "2.00", ratio: 2.0, steps: ["Step 1", "Step 7"] },
  { name: "H-Ala-OBzl·Tos", mw: 351.42, eq: "1.00", ratio: 1.0, steps: ["Step 1"] },
  { name: "Boc-Gly", mw: 175.18, eq: "1.00", ratio: 1.0, steps: ["Step 3"] },
  { name: "Boc-Asp(OBzl)", mw: 323.34, eq: "1.00", ratio: 1.0, steps: ["Step 5"] }
];

const stepsContainer = document.querySelector("#steps");
const pickupBody = document.querySelector("#pickup-body");
const pickupStatus = document.querySelector("#pickup-status");
const stepTemplate = document.querySelector("#step-template");

function formatNumber(value, digits = 4) {
  if (!Number.isFinite(value)) {
    return "-";
  }
  const fixed = Number(value).toFixed(digits);
  return fixed.replace(/(\.\d*?[1-9])0+$|\.0+$/, "$1");
}

function parseValue(value) {
  if (value === "" || value == null) {
    return null;
  }
  const normalized = String(value).trim().replace(/[。．，]/g, ".");
  const number = Number(normalized);
  return Number.isFinite(number) ? number : null;
}

function mmolFromMass(mass, mw) {
  return (mass / mw) * 1000;
}

function massFromMmol(mmol, mw) {
  return (mmol * mw) / 1000;
}

function setInputValue(input, value, { preserveWhileFocused = false } = {}) {
  if (preserveWhileFocused && document.activeElement === input) {
    return;
  }

  input.value = value;
}

function setNumberInputs(rowEl, mw, mmol, options = {}) {
  const massInput = rowEl.querySelector(".mass-input");
  const mmolInput = rowEl.querySelector(".mmol-input");

  if (mmol == null) {
    setInputValue(massInput, "", options);
    setInputValue(mmolInput, "", options);
    return;
  }

  setInputValue(mmolInput, formatNumber(mmol), options);
  setInputValue(massInput, formatNumber(massFromMmol(mmol, mw)), options);
}

function setRowValues(rowEl, row, mmol) {
  setNumberInputs(rowEl, row.mw, mmol, { preserveWhileFocused: true });
}

function inferStepFromRow(card, config, sourceIndex, sourceMmol) {
  const rows = [...card.querySelectorAll("tbody tr")];
  const source = config.rows[sourceIndex];
  const inferenceStatus = card.querySelector(".inference-status");

  if (sourceMmol == null || sourceMmol < 0) {
    inferenceStatus.textContent = "自动推算基准：-";
    return;
  }

  const baseScale = sourceMmol / source.ratio;
  config.rows.forEach((row, index) => {
    const inferredMmol = baseScale * row.ratio;
    setRowValues(rows[index], row, inferredMmol);
  });

  inferenceStatus.textContent = `自动推算基准：${source.name}，按 ${formatNumber(source.ratio, 2)} eq 推算整步投料`;
}

function calculateStep(card, config) {
  const rows = [...card.querySelectorAll("tbody tr")];
  const candidates = [];

  rows.forEach((rowEl, index) => {
    const row = config.rows[index];
    const mmol = parseValue(rowEl.querySelector(".mmol-input").value);
    if (row.stoich && mmol != null && mmol >= 0) {
      candidates.push({
        name: row.name,
        productMmol: mmol / row.stoich,
      });
    }
  });

  const theoreticalMassEl = card.querySelector(".theoretical-mass");
  const theoreticalMmolEl = card.querySelector(".theoretical-mmol");
  const actualMmolEl = card.querySelector(".actual-mmol");
  const yieldEl = card.querySelector(".yield-value");
  const limitingEl = card.querySelector(".limiting-note");
  const actualMass = parseValue(card.querySelector(".actual-mass-input").value);

  if (!candidates.length) {
    theoreticalMassEl.textContent = "-";
    theoreticalMmolEl.textContent = `产物 ${config.product.name}：- mmol`;
    actualMmolEl.textContent = "对应 mmol：-";
    yieldEl.textContent = "-";
    limitingEl.textContent = "限量底物：-";
    return;
  }

  const limiting = candidates.reduce((min, item) => item.productMmol < min.productMmol ? item : min);
  const theoreticalMmol = limiting.productMmol;
  const theoreticalMass = massFromMmol(theoreticalMmol, config.product.mw);

  theoreticalMassEl.textContent = `${formatNumber(theoreticalMass)} g`;
  theoreticalMmolEl.textContent = `产物 ${config.product.name}：${formatNumber(theoreticalMmol)} mmol`;
  limitingEl.textContent = `限量底物：${limiting.name}`;

  if (actualMass == null) {
    actualMmolEl.textContent = "对应 mmol：-";
    yieldEl.textContent = "-";
    return;
  }

  const actualMmol = mmolFromMass(actualMass, config.product.mw);
  const yieldValue = theoreticalMass > 0 ? (actualMass / theoreticalMass) * 100 : null;

  actualMmolEl.textContent = `对应 mmol：${formatNumber(actualMmol)}`;
  yieldEl.textContent = yieldValue == null ? "-" : `${formatNumber(yieldValue, 2)} %`;
}

function bindRowConversion(card, config) {
  const rows = [...card.querySelectorAll("tbody tr")];

  rows.forEach((rowEl, index) => {
    const row = config.rows[index];
    const massInput = rowEl.querySelector(".mass-input");
    const mmolInput = rowEl.querySelector(".mmol-input");

    massInput.addEventListener("input", () => {
      const mass = parseValue(massInput.value);
      const mmol = mass == null ? null : mmolFromMass(mass, row.mw);
      inferStepFromRow(card, config, index, mmol);
      calculateStep(card, config);
    });

    mmolInput.addEventListener("input", () => {
      const mmol = parseValue(mmolInput.value);
      inferStepFromRow(card, config, index, mmol);
      calculateStep(card, config);
    });
  });

  card.querySelector(".actual-mass-input").addEventListener("input", () => {
    calculateStep(card, config);
  });
}

function renderRow(row) {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${row.name}</td>
    <td><span class="role-tag">${row.role}</span></td>
    <td class="mw-cell">${row.mw}</td>
    <td class="eq-cell">${row.eq}</td>
    <td>
      <input type="text" inputmode="decimal" lang="en" autocomplete="off" class="mass-input" placeholder="输入质量">
    </td>
    <td>
      <input type="text" inputmode="decimal" lang="en" autocomplete="off" class="mmol-input" placeholder="输入 mmol">
    </td>
    <td>${row.note ?? "-"}</td>
  `;
  return tr;
}

function renderPickupRow(material) {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${material.name}</td>
    <td class="pickup-steps">${material.steps.join(" / ")}</td>
    <td class="mw-cell">${material.mw}</td>
    <td class="eq-cell">${material.eq}</td>
    <td>
      <input type="text" inputmode="decimal" lang="en" autocomplete="off" class="mass-input" placeholder="输入质量">
    </td>
    <td>
      <input type="text" inputmode="decimal" lang="en" autocomplete="off" class="mmol-input" placeholder="输入 mmol">
    </td>
  `;
  return tr;
}

function syncPickupTable(sourceIndex, sourceMmol) {
  const rows = [...pickupBody.querySelectorAll("tr")];
  const source = pickupMaterials[sourceIndex];

  if (sourceMmol == null || sourceMmol < 0) {
    rows.forEach((rowEl) => setNumberInputs(rowEl, 0, null, { preserveWhileFocused: true }));
    pickupStatus.textContent = "统一取料基准：-";
    return;
  }

  const baseScale = sourceMmol / source.ratio;

  pickupMaterials.forEach((material, index) => {
    setNumberInputs(rows[index], material.mw, baseScale * material.ratio);
  });

  pickupStatus.textContent = `统一取料基准：${source.name}，按 ${formatNumber(source.ratio, 2)} eq 反推整条路线原料`;
}

function bindPickupTable() {
  const rows = [...pickupBody.querySelectorAll("tr")];

  rows.forEach((rowEl, index) => {
    const material = pickupMaterials[index];
    const massInput = rowEl.querySelector(".mass-input");
    const mmolInput = rowEl.querySelector(".mmol-input");

    massInput.addEventListener("input", () => {
      const mass = parseValue(massInput.value);
      const mmol = mass == null ? null : mmolFromMass(mass, material.mw);
      syncPickupTable(index, mmol);
    });

    mmolInput.addEventListener("input", () => {
      const mmol = parseValue(mmolInput.value);
      syncPickupTable(index, mmol);
    });
  });
}

function renderStep(config) {
  const fragment = stepTemplate.content.cloneNode(true);
  const card = fragment.querySelector(".step-card");
  card.id = config.id;
  card.querySelector(".step-label").textContent = config.label;
  card.querySelector(".step-title").textContent = config.title;
  card.querySelector(".step-equation").textContent = config.equation;
  const procedureList = card.querySelector(".procedure-list");
  config.procedure.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    procedureList.appendChild(li);
  });

  const body = card.querySelector(".materials-body");
  config.rows.forEach((row) => {
    body.appendChild(renderRow(row));
  });

  bindRowConversion(card, config);
  calculateStep(card, config);
  return fragment;
}

pickupMaterials.forEach((material) => {
  pickupBody.appendChild(renderPickupRow(material));
});

bindPickupTable();

steps.forEach((step) => {
  stepsContainer.appendChild(renderStep(step));
});
