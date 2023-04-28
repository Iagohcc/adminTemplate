import Layout from "@/components/template/Layout";
import Head from "next/head";
import router from "next/router";
import { useEffect } from "react";

function redirectToAuth() {
  router.push('/autenticacao');
}

export default function Home() {
  useEffect(() => {
    redirectToAuth();
  }, []);

  return null;
}