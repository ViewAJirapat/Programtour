// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import TourCheck from './pages/TourCheck';
import Tourdetail from './pages/Tourdetail';
import Touradd from './pages/TourAdd'
import Billinform from './pages/Billinform';
import Refundrequest from './pages/RefundRequest';
import Payment from './pages/Payment';
import Home from './pages/Home';
import Pagestestter from './pages/testpages';
import Login from './pages/Login'
import Register from './pages/Register';
import AfLogin from './pages/AlHome';
import RefundStatus from './pages/RefundStatus';
import React from 'react';
import TourOnedaytrip from './pages/Touronedaytrip';
import Tourwithhotel from './pages/Tourwithhotet';
import Tourpromotion from './pages/Tourpromotion';
import ProofRefund from './pages/ProofRefund';
import ShowRefund from './pages/ShowRefund';
import AdminHome from './pages/AdminHome';
import CantRefund from './pages/CantRefund';
import DeleteTour from './pages/DeleteTour';
import TourUpdate from './pages/TourUpdate';
import ShowreReserve from './pages/ShowReserve';
import TourdetailNoBtn from './pages/TourDetail_Nobtn';
import { Switch } from 'react-if';
import { AuthProvider } from './auth';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Navigate replace to="/home/:lang" />} />
        <Route exact path="/home/:lang" element={<Home/>} />
        <Route path="/login/:lang" element={<Login/>}/>
        <Route path="/register/:lang" element={<Register/>}/>

        <Route path="/:uid/alhome/:lang" element={<AfLogin/>}/>
        <Route path="/:uid/:id/tourdetail/:lang" element={<Tourdetail/>} />
        <Route path="/:uid/tourpromotion/:lang" element={<Tourpromotion/>} />
        <Route path="/:uid/touronedaytrip/:lang" element={<TourOnedaytrip/>} />
        <Route path="/:uid/tourwithhotel/:lang" element={<Tourwithhotel/>} />
        <Route path="/:uid/tourcheck/:lang" element={<TourCheck/>} />
        <Route path="/:uid/RefundStatus/:lang" element={<RefundStatus/>}/>
        <Route path="/:uid/:id/refundrequest/:lang" element={<Refundrequest/>}/>
        <Route path="/:uid/:id/billinform/:lang" element={<Billinform/>}/>
        <Route path="/:uid/:id/payment/:lang" element={<Payment/>}/>

        <Route path="/AdminHome/:lang" element={<AdminHome/>}/>
        <Route path="/:id/tourdetail/:lang" element={<TourdetailNoBtn/>} />
        <Route path="/touradd/:lang" element={<Touradd/>} />
        <Route path="/:id/ProofRefund/:lang" element={<ProofRefund/>}/>
        <Route path="/ShowRefund/:lang" element={<ShowRefund/>}/>
        <Route path="/CantRefund/:lang" element={<CantRefund/>}/>
        <Route path="/DeleteTour/:lang" element={<DeleteTour/>}/>
        <Route path="/:id/TourUpdate/:lang" element={<TourUpdate/>}/>
        <Route path="/ShowReserve/:lang" element={<ShowreReserve/>}/>

        <Route path="/testpages/:lang" element={<Pagestestter/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
