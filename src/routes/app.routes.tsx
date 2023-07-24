import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import React, { useContext } from "react";
import { Home } from "../pages/Home";
import { VisualizarEstacoes } from "../pages/VisualizarEstacoes";
import { CriarAtivo } from "../pages/criarAtivo";
import { CriarAntena } from "../pages/CriarAntena";
import { EditarAntena } from "../pages/EditarAntena";
import { CriarArcondicionado } from "../pages/CriarArcondicionado";
import { EditarArcondicionado } from "../pages/EditarArcondicionado";
import { CriarCabo } from "../pages/CriarCabo";
import { EditarCabo } from "../pages/EditarCabo";
import { CriarCombinador } from "../pages/CriarCombinador";
import { EditarCombinador } from "../pages/EditarCombinador";
import { CriarDisjuntor } from "../pages/CriarDisjuntor";
import { EditarDisjuntor } from "../pages/EditarDisjuntor";
import { CriarDPS } from "../pages/CriarDPS";
import { EditarDPS } from "../pages/EditarDPS";
import { CriarExaustor } from "../pages/CriarExaustor";
import { EditarExaustor } from "../pages/EditarExaustor";
import { CriarNobreak } from "../pages/CriarNobreak";
import { EditarNobreak } from "../pages/EditarNobreak";
import { CriarParabolica } from "../pages/CriarParabolica";
import { EditarParabolica } from "../pages/EditarParabolica";
import { CriarReceptor } from "../pages/CriarReceptor";
import { EditarReceptor } from "../pages/EditarReceptor";
import { CriarSwitch } from "../pages/CriarSwitch";
import { EditarSwitch } from "../pages/EditarSwitch";
import { CriarTelemetria } from "../pages/CriarTelemetria";
import { EditarTelemetria } from "../pages/EditarTelemetria";
import { CriarTorre } from "../pages/CriarTorre";
import { EditarTorre } from "../pages/EditarTorre";
import { CriarTransmissor } from "../pages/CriarTransmissor";
import { EditarTransmissor } from "../pages/EditarTransmissor";
import { Documentos } from "../pages/Documentos";
import { Login } from "../pages/Login";
import AuthContext from "../context/AuthContext";


function ProtectedRoutes() {
  return (
    <React.Fragment>
      <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/estacoes" element={<VisualizarEstacoes />} />
      <Route path="/criarAtivo" element={<CriarAtivo />} />
      <Route path="/criarAntena" element={<CriarAntena />} />
      <Route path="/editarAntena" element={<EditarAntena />} />
      <Route
        path="/criarArcondicionado"
        element={<CriarArcondicionado />}
      />
      <Route
        path="/editarArcondicionado"
        element={<EditarArcondicionado />}
      />
      <Route path="/criarCabo" element={<CriarCabo />} />
      <Route path="/editarCabo" element={<EditarCabo />} />
      <Route path="/criarCombinador" element={<CriarCombinador />} />
      <Route path="/editarCombinador" element={<EditarCombinador />} />
      <Route path="/criarDisjuntor" element={<CriarDisjuntor />} />
      <Route path="/editarDisjuntor" element={<EditarDisjuntor />} />
      <Route path="/criarDPS" element={<CriarDPS />} />
      <Route path="/editarDPS" element={<EditarDPS />} />
      <Route path="/criarExaustor" element={<CriarExaustor />} />
      <Route path="/editarExaustor" element={<EditarExaustor />} />
      <Route path="/criarNobreak" element={<CriarNobreak />} />
      <Route path="/editarNobreak" element={<EditarNobreak />} />
      <Route path="/criarParabolica" element={<CriarParabolica />} />
      <Route path="/editarParabolica" element={<EditarParabolica />} />
      <Route path="/criarReceptor" element={<CriarReceptor />} />
      <Route path="/editarReceptor" element={<EditarReceptor />} />
      <Route path="/criarSwitch" element={<CriarSwitch />} />
      <Route path="/editarSwitch" element={<EditarSwitch />} />
      <Route path="/criarTelemetria" element={<CriarTelemetria />} />
      <Route path="/editarTelemetria" element={<EditarTelemetria />} />
      <Route path="/criarTorre" element={<CriarTorre />} />
      <Route path="/editarTorre" element={<EditarTorre />} />
      <Route path="/criarTransmissor" element={<CriarTransmissor />} />
      <Route path="/editarTransmissor" element={<EditarTransmissor />} />
      <Route path="/documentos" element={<Documentos />} />
      </Routes>
    </React.Fragment>
  );
}

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<ProtectedRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}
