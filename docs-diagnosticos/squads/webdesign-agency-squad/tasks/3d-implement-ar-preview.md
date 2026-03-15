---
task: Implement AR Preview
responsavel: "@3d-immersive-designer"
responsavel_type: agent
atomic_layer: task
elicit: true
Entrada: |
  - 3d_product_models: Modelos 3D dos produtos em GLTF
  - ar_framework_choice: Framework AR (Model Viewer, 8th Wall, AR.js)
  - device_targets: Dispositivos alvo (iOS, Android, ambos)
Saida: |
  - ar_experience: Experiência AR funcional e testada
  - qr_trigger: QR code para ativar AR em mobile
  - fallback_static_view: Visualização 3D estática como fallback
Checklist:
  - "[ ] Preparar modelo USDZ (iOS) e GLTF (Android)"
  - "[ ] Implementar com model-viewer (solução mais universal)"
  - "[ ] Configurar Quick Look (iOS) e Scene Viewer (Android)"
  - "[ ] Criar experiência de entrada com instrução clara"
  - "[ ] Testar em iPhone e Android"
  - "[ ] Criar fallback para dispositivos sem suporte"
  - "[ ] Medir impacto na conversão"
---

# *implement-ar-preview

AR que converte: ver o produto em espaço real aumenta confiança de compra em 94%.

## Solução Recomendada

`<model-viewer>` — suporte nativo para iOS Quick Look e Android Scene Viewer,
sem necessidade de app, funciona direto no browser.
